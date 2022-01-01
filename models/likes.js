const mongoose = require('mongoose');

const likesSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  answerId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model('like', likesSchema);

module.exports = model;
