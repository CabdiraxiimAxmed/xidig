const mongoose = require('mongoose');
const QuestionSchema = new mongoose.Schema({
  name: {
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
  tags: [],
  answers: [],
});

// TODO: check it again if it is correct
const question = mongoose.model('question', QuestionSchema);
module.exports = question;
