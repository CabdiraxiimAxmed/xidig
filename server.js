if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
// connecting to mongoose
const uri = process.env.URI;
mongoose.connect(uri);
const db = mongoose.connection;
db.once('open', () => console.log('connect to mongoose'));

const app = express();
app.use(express.json());
const port = process.env.PORT || 8000;
app.use(
  express.urlencoded({
    limit: '1mb',
    parameterLimit: 10000,
    extended: true,
  })
);
const questionRoute = require('./routes/question');
const registerRouter = require('./routes/register');
app.use('/suaal', questionRoute);
app.use('/user', registerRouter);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}
app.listen(port, console.log(`server started on port: ${port}`));
