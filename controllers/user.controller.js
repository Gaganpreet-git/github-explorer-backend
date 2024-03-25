const catchAsync = require("../utils/catchAsync");
const userService = require("../services/user.service");

const saveUser = async (req, res) => {
  const { username } = req.params;

  const user = await userService.saveUser(username);

  res.status(200).json(user);
};
const getMutualFollowers = async (req, res) => {
  const { username } = req.params;
  const mutualFollowers = await userService.getMutualFollowers(username);
  res.status(200).json(mutualFollowers);
};

const searchUsers = async (req, res) => {
  // Extract query parameters
  const { username, company, blog, location, email, created_at } = req.query;

  // Call service with query parameters
  const users = await userService.searchUsers(
    username,
    company,
    blog,
    location,
    email,
    created_at
  );

  // Return users to client.
  res.status(200).json(users);
};
const deleteUser = async (req, res) => {};
const updateUser = async (req, res) => {};
const getUsers = async (req, res) => {};

module.exports = {
  saveUser: catchAsync(saveUser),
  getMutualFollowers: catchAsync(getMutualFollowers),
  searchUsers: catchAsync(searchUsers),
  deleteUser: catchAsync(deleteUser),
  updateUser: catchAsync(updateUser),
  getUsers: catchAsync(getUsers),
};
