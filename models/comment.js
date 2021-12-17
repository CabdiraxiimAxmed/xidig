const mongoose = require('mongoose');
const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  answerId: {
    type: String,
    required: true,
  },
});

const comment = mongoose.model('comment', CommentSchema);
module.exports = comment;
