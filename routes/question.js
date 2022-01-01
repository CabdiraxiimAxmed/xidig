const router = require('express').Router();
const Questions = require('../models/question');
const Comment = require('../models/comment');
const Answers = require('../models/answer');
const Likes = require('../models/likes');
const Users = require('../models/user');
router.get('/', async (req, res) => {
  let questions = await Questions.find({}).lean();
  for (let question of questions) {
    const user = await Users.findOne({ username: question.username });
    question['avatar'] = user.avatar;
  }
  console.log(questions);
  res.json(questions);
});
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const question = await Questions.findOne({ _id: id });
  const answers = await Answers.find({
    questionId: question.id,
  }).lean();
  for (let answer of answers) {
    let comment = await Comment.find({ answerId: answer._id });
    let likes = await Likes.find({
      $and: [{ username: answer.username }, { answerId: answer._id }],
    });
    if (likes.length) {
      answer['liked'] = true;
    } else {
      answer['liked'] = false;
    }
    answer['comments'] = comment;
    let user = await Users.findOne({ username: answer.username });
    answer['avatar'] = user.avatar;
  }
  const questionUser = await Users.findOne({ username: question.username });
  const data = {
    questionName: question.questionName,
    question: question.question,
    username: question.username,
    avatar: questionUser.avatar,
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
});

router.post('/', async (req, res) => {
  const { question, questionName, username, tags } = req.body;
  const newQuestion = new Questions({ question, questionName, username, tags });
  await newQuestion.save();
  res.send('success');
});
router.post('/:username/likes', async (req, res) => {
  const { username, answerId, likes, isIncremented } = req.body;
  await Answers.updateOne({ _id: answerId }, { $set: { likes } });
  if (isIncremented) {
    const newLikes = new Likes({ username, answerId });
    await newLikes.save();
    res.send('success');
  } else {
    await Likes.deleteOne({
      $and: [{ username }, { answerId }],
    });
    res.send('success');
  }
});
router.get('/user-questions/:username', async (req, res) => {
  const { username } = req.params;
  const questions = await Questions.find({ username });
  res.send(questions);
});
module.exports = router;
