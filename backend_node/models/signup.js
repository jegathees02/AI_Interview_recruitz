const mongoose = require('mongoose');
const scoreCollectionSchema = require("./score");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
    username: {
      type: String,
      default: function () {
        return this.email.substring(0, this.email.indexOf('@')) || '';
      },
      unique: true,
    },
    subscription: { type: Number, default: 0 },
    overall_score: { type: Number, default: 0 },
    // score : scoreCollectionSchema,
    coins: { type: Number, default: 0 },
    level: { type: Number, default: 0 },
});

const User = mongoose.model('User', userSchema);

module.exports = User;