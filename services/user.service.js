const axios = require("axios");
const User = require("../models/User.model");

const saveUser = async (username) => {
  // Check if the user is already in the database.
  const existingUser = await User.findOne({ username });

  //   If the user is already in the database, return the user.
  if (existingUser) {
    return existingUser;
  }

  const github_API_URL = process.env.GITHUB_API_URL;

  // Fetches the user from the github API
  const user = await axios.get(`${github_API_URL}/users/${username}`);

  // If the user is not in the database, create a new user.
  const newUser = {
    username: user.data.login,
    id: user.data.id,
    avatar_url: user.data.avatar_url,
    type: user.data.type,
    name: user.data.name,
    company: user.data.company,
    blog: user.data.blog,
    location: user.data.location,
    email: user.data.email,
    bio: user.data.bio,
    public_repos: user.data.public_repos,
    followers: user.data.followers,
    following: user.data.following,
    created_at: user.data.created_at,
    updated_at: user.data.updated_at,
  };

  // Save new user to databse.
  const savedUser = await User.create(newUser);
  return savedUser;
};

module.exports = { saveUser };
