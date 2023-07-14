const { User } = require("../models");

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get one user
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
  // Create a user
  async createUser(req, res) {
    try {
      const user = await User.create(body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate({ _id: params.id }, body, {
        new: true,
        runValidators: true,
      });
      if (!user) {
        return res.status(404).json({ message: "User does not exist" });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //   // Delete a user
  //   async deleteUser(req, res) {
  //     try {
  // const user = await User.findOneAndRemove({_id: req.params.userId});
  // res.status(200).json(user);
  // if (!user) {
  //   return
  // }
  //     } catch (err) {

  //     }
  //   }
};
