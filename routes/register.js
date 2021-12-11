const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user');
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const userData = {};
  const { name, username, email } = await User.findOne({ _id: id });
  const user = { name, username, email };
  res.send(user);
});
router.post('/diwaan', async (req, res) => {
  const { name, username, email, password } = req.body;
  const oldUser = await User.findOne({ username });
  if (oldUser) {
    res.status(400).send('existed');
    return;
  }
  const hash = await bcrypt.hash(password, 10);
  const user = await new User({
    name,
    username,
    email,
    password: hash,
  });
  console.log(user);
  await user.save();
  res.end();
});

router.post('/galid', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) res.send(user.id);
  } else {
    res.status(400).send("user didn't find ");
  }
  res.end();
});
module.exports = router;
