const mongoose = require("mongoose");

const friendSchema = new mongoose.Schema({
  username: { type: String, required: true },
  mutualFollowers: { type: [String], default: [], required: true },
});

const Friend = mongoose.model("Friend", friendSchema);

module.exports = Friend;
