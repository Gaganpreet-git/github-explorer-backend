const catchAsync = require("../utils/catchAsync");

const saveUser = async (req, res) => {};
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
