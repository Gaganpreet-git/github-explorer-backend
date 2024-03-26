const axios = require("axios");
const User = require("../models/User.model");
const Friend = require("../models/Friend.model");
const ApiError = require("../utils/ApiError");

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

const getMutualFollowers = async (username) => {
  // Fetch mutual followers from databse
  const existingMutualFollowers = await Friend.findOne({ username });
  // console.log(existingMutualFollowers);

  // If mutual followers present in databse return it
  if (existingMutualFollowers && existingMutualFollowers.length) {
    return existingMutualFollowers.mutualFollowers;
  }

  const github_API_URL = process.env.GITHUB_API_URL;

  // Fetches the followers from the github API
  const followers = await axios.get(
    `${github_API_URL}/users/${username}/followers`
  );

  // Fetches the following from the github API
  const following = await axios.get(
    `${github_API_URL}/users/${username}/following`
  );

  // If no followers or following then mutual followers not possible.
  if (!followers.data.length || !following.data.length) {
    return [];
  }

  // Create an array of followers username.
  const followersName = followers.data.map((follower) => {
    return follower.login;
  });

  // Create an array of followings username.
  const followingsName = following.data.map((follower) => {
    return follower.login;
  });

  // Find mutual followers.
  const mutualFollowers = followersName.filter((follower) => {
    return followingsName.includes(follower);
  });

  // Save mutual followers to the database
  const saved = await Friend.create({ username, mutualFollowers });

  // Return mutual followers
  return saved.mutualFollowers;
};

const searchUsers = async (
  username,
  company,
  blog,
  location,
  email,
  created_at
) => {
  const query = {};

  if (username) {
    query.username = username;
  }

  if (company) {
    query.company = company;
  }

  if (blog) {
    query.blog = blog;
  }

  if (location) {
    query.location = location;
  }

  if (email) {
    query.email = email;
  }

  if (created_at) {
    query.created_at = created_at;
  }

  // Find users in database with the received queries.
  const users = await User.find(query);

  // If no users found then throw an error.
  if (!users.length) {
    throw new ApiError(404, "User not found");
  }

  return users;
};

const deleteUser = async (username) => {
  const deletedUser = await User.findOneAndUpdate(
    { username },
    { deleted: true },
    { new: true }
  );

  if (!deletedUser) {
    throw new ApiError(404, "User not found");
  }

  return deletedUser;
};

const updateUser = async (username, company, blog, location, email, bio) => {
  const updateQuery = {};

  if (company) {
    updateQuery.company = company;
  }

  if (blog) {
    updateQuery.blog = blog;
  }

  if (location) {
    updateQuery.location = location;
  }

  if (email) {
    updateQuery.email = email;
  }

  if (bio) {
    updateQuery.bio = bio;
  }

  // Find and update user in database.
  const updatedUser = await User.findOneAndUpdate({ username }, updateQuery, {
    new: true,
  });

  // If no user found then throw an error.
  if (!updatedUser) {
    throw new ApiError(404, "User not found");
  }

  return updatedUser;
};

module.exports = {
  saveUser,
  getMutualFollowers,
  searchUsers,
  deleteUser,
  updateUser,
};
