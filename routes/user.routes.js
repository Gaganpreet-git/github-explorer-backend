const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

// Route to save a new user.
router.get("/save-user/:username", userController.saveUser);

// Route to find mutual followers.
router.get(
  "/find-mutual-followers/:username",
  userController.getMutualFollowers
);

// Route to search users.
router.get("/search-users", userController.searchUsers);

// Route to delete a user.
router.delete("/delete-user/:username", userController.deleteUser);

// Route to update a user.
router.patch("/update-user/:username", userController.updateUser);

// Route to get all users.
router.get("/list-users", userController.getUsers);

module.exports = router;
