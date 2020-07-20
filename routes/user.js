const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.get('/', (req, res) => {
  const userIdObject = req.query;
  User.find(userIdObject, (err, foundUser) => {
    if (foundUser.length === 0) {
      const user = new User({
        userId: userIdObject.userId,
        userTeams: [],
      });
      user.save();
      res.redirect(`/api/?userId=${userIdObject.userId}`);
    } else {
      res.json(foundUser[0].userTeams);
    }
  });
});

router.post('/add', (req, res) => {
  const { userId, addedTeam } = req.body;

  User.find({ userId }, (err, foundUser) => {
    const len = foundUser[0].userTeams.length;
    const randomIndex = Math.floor(Math.random() * (len + 1));
    foundUser[0].userTeams.splice(randomIndex, 0, addedTeam);
    foundUser[0].save().then((doc) => res.json(doc.userTeams));
  });
});

router.post('/delete', (req, res) => {
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

router.post('/edit', (req, res) => {
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

module.exports = router;