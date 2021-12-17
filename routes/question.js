const router = require('express').Router();
const Questions = require('../models/question');
const Comment = require('../models/comment');
const Answers = require('../models/answer');
router.get('/', (req, res) => {
  Questions.find({}, (err, result) => {
    res.json(result);
  });
});
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const question = await Questions.findOne({ _id: id });
  const answers = await Answers.find({
    questionId: question.id,
  }).lean();
  for (let answer of answers) {
    let comment = await Comment.find({ answerId: answer._id });
    answer['comments'] = comment;
  }
  const data = {
    questionName: question.questionName,
    question: question.question,
    username: question.username,
    tags: question.tags,
    answers,
  };
  res.send(data);
});

router.post('/:id', async (req, res) => {
  const { comment, answerId, username } = req.body;
  if (comment) {
    const newComment = new Comment({
      comment,
      answerId,
      username,
    });
    await newComment.save();
    res.send('success');
  } else {
    const { answer, questionId, username } = req.body;
    const newAnswer = new Answers({ answer, questionId, username });
    await newAnswer.save();
    res.send('sucess');
  }
  // const newComment = new Comment({});
  // res.send('success');
});

router.post('/', async (req, res) => {
  const { question, questionName, username, tags } = req.body;
  const newQuestion = new Questions({ question, questionName, username, tags });
  await newQuestion.save();
  res.send('success');
});
module.exports = router;
