const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(
  'mongodb+srv://admin-natig:PGCmlkfQ0K3VxQqB@randordercluster.vidff.mongodb.net/randorder',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static('client/build'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server has started on port ${port}`));

const teamSchema = mongoose.Schema({ teamName: String, teamMembers: String, details: String });

const userSchema = mongoose.Schema({
  userId: String,
  userTeams: [teamSchema],
});

const User = mongoose.model('User', userSchema);

app.get('/api', (req, res) => {
  const userIdObject = req.query;
  User.find(userIdObject, (err, foundUser) => {
    if (foundUser.length === 0) {
      const user = new User({
        userId: userIdObject.userId,
        userTeams: [],
      });
      user.save();
      res.redirect(`/?userId=${userIdObject.userId}`);
    } else {
      res.json(foundUser[0].userTeams);
    }
  });
});

app.post('/api/add', (req, res) => {
  const { userId, addedTeam } = req.body;

  User.find({ userId }, (err, foundUser) => {
    const len = foundUser[0].userTeams.length;
    const randomIndex = Math.floor(Math.random() * (len + 1));
    foundUser[0].userTeams.splice(randomIndex, 0, addedTeam);
    foundUser[0].save().then((doc) => res.json(doc.userTeams));
  });
});

app.post('/api/delete', (req, res) => {
  const { userId, teamId } = req.body;

  User.findOne({ userId }, (err, foundUser) => {
    if (!err) {
      foundUser.userTeams.id(teamId).remove();
      foundUser.save().then((doc) => res.json(doc.userTeams));
    } else {
      console.log(err);
    }
  });
});

app.post('/api/edit', (req, res) => {
  const { userId, teamId, editedTeam } = req.body;

  User.findOne({ userId }, (err, foundUser) => {
    if (!err) {
      const doc = foundUser.userTeams.id(teamId);
      doc.teamName = editedTeam.teamName;
      doc.teamMembers = editedTeam.teamMembers;
      doc.details = editedTeam.details;
      foundUser.save().then((doc) => res.json(doc.userTeams));
    } else {
      console.log(err);
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
