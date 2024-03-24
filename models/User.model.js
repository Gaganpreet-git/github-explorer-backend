const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: "string", required: true },
  id: { type: "number", required: true },
  avatar_url: { type: "string", required: true },
  type: { type: "string", required: true },
  name: { type: "string", required: true },
  company: { type: "string", required: true },
  blog: { type: "string", required: true },
  location: { type: "string", required: true },
  email: { type: "string", required: true },
  bio: { type: "string", required: true },
  public_repos: { type: "number", required: true },
  followers: { type: "number", required: true },
  following: { type: "number", required: true },
  created_at: { type: "string", required: true },
  updated_at: { type: "string", required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
