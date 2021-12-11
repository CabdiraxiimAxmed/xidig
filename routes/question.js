const router = require('express').Router();
const Questions = require('../models/question');
router.get('/', (req, res) => {
  Questions.find({}, (err, result) => {
    res.json(result);
  });
});
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const question = await Questions.findOne({ _id: id });
  res.send(question);
});
module.exports = router;
