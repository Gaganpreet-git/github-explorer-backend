const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: "string", required: true },
  id: { type: "number", required: true },
  avatar_url: { type: "string", required: true, default: null },
  type: { type: "string", required: true },
  name: { type: "string", default: null },
  company: { type: "string", default: null },
  blog: { type: "string", default: null },
  location: { type: "string", default: null },
  email: { type: "string", default: null },
  bio: { type: "string", default: null },
  public_repos: { type: "number", default: 0 },
  followers: { type: "number", default: 0 },
  following: { type: "number", default: 0 },
  created_at: { type: "string", required: true },
  updated_at: { type: "string", required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
