const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors());

const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://admin-natig:PGCmlkfQ0K3VxQqB@randordercluster.vidff.mongodb.net/randorder',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

const user = require('./routes/user');
app.use('/api', user);

const path = require('path');

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server has started on port ${port}`));