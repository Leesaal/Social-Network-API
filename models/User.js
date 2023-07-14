const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a username"],
      unique: true,
      trim: true,
      maxlength: 30,
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: true,
      maxlength: 30,
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", userSchema);

module.exports = User;
