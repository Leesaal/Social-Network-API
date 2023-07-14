const { User } = require("../models");

module.exports = {
  // Get all
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get one
  async getOneUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).select(
        "-__v"
      );
      if (!user) {
        return res.status(404).json({ message: "User does not exist" });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "User does not exist" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
      console.error(error);
    }
  },
  // Delete
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });
      res.status(200).json(user);
      if (!user) {
        return res.status(404).json({ message: "User does not exist" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Add Friend
  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $push: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );
      if (!user) {
        return res.status(404).json({ message: "User does not exist" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Delete Friend
  async deleteFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );
      if (!user) {
        return res.status(404).json({ message: "User does not exist" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
