const mongoose = require('mongoose');

const followschema = new mongoose.Schema(
  {
    // Followers' IDs of the user.
    follower: String,
    // IDs of the users being followed.
    following: String,
    status: {
      type: String,
      default: 'pending',
      enum: ['pending', 'accepted', 'rejected'],
    },
    

  },
  {
    timestamps: true,
  },
);

const followModel = mongoose.model('Follow', followschema);
module.exports = followModel;
