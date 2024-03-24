const catchAsync = require("../utils/catchAsync");
const userService = require("../services/user.service");

const saveUser = async (req, res) => {
  const { username } = req.params;

  const user = await userService.saveUser(username);

  res.status(200).json(user);
};
const getMutualFollowers = async (req, res) => {};
const searchUsers = async (req, res) => {};
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
