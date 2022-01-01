const mongoose = require('mongoose');
const QuestionSchema = new mongoose.Schema({
  questionName: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    required: true,
  },
  tags: {
    required: true,
    type: Array,
  },
});

const question = mongoose.model('question', QuestionSchema);
module.exports = question;
