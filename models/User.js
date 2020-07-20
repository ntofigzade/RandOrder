const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = Schema({ teamName: String, teamMembers: String, details: String });

const userSchema = Schema({
  userId: String,
  userTeams: [teamSchema],
});

module.exports = mongoose.model('User', userSchema);