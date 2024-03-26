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
const deleteUser = async (req, res) => {
  // Extract "username" from query parameters
  const { username } = req.params;

  // Call service with "username" query parameters
  const deletedUser = await userService.deleteUser(username);

  // Return deleted user to client.
  res.status(204).json(deletedUser);
};

const updateUser = async (req, res) => {
  // Extract "username" from request parameters
  const { username } = req.params;

  // Extract "company", "blog", "location", "email", and "bio" from body
  const { company, blog, location, email, bio } = req.body;

  // Call service with "username", "company", "blog", "location", "email", and "bio" body parameters
  const updatedUser = await userService.updateUser(
    username,
    company,
    blog,
    location,
    email,
    bio
  );

  // Return updated user to client.
  res.status(200).json(updatedUser);
};
const getUsers = async (req, res) => {
  // Extract "sortBy" from query parameters
  const { sortBy } = req.query;

  // Call service with "sortBy" query parameters
  const users = await userService.getUsers(sortBy);

  // Return users to client.
  res.status(200).json(users);
};

module.exports = {
  saveUser: catchAsync(saveUser),
  getMutualFollowers: catchAsync(getMutualFollowers),
  searchUsers: catchAsync(searchUsers),
  deleteUser: catchAsync(deleteUser),
  updateUser: catchAsync(updateUser),
  getUsers: catchAsync(getUsers),
};
