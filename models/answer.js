const mongoose = require('mongoose');
const AnswerSchema = new mongoose.Schema({
  answer: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    required: true,
  },
  questionId: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

const answer = mongoose.model('answer', AnswerSchema);
module.exports = answer;
