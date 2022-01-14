const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const app = express();
const cors = require('cors');
const http = require('http');
const server = http.createServer(app);

var bodyParser = require('body-parser');
const db = require('./db');

app.use(cors());

app.use(bodyParser.json());

app.post('/api/login', loginMiddleWare, async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username);
    const query = {
      // give the query a unique name
      name: 'fetch-user',
      text: 'SELECT * FROM users WHERE username=$1 ',
      values: [username],
    };

    const results = await db.query(query);

    let user = await results.rows[0];
    console.log(user);
    if (typeof user == 'undefined') {
      res.json({
        message: 'no user found ',
      });
    }
  } catch (error) {
    console.log(error);
  }
});
app.post('/api/signup', signUpMiddleWare, async (req, res) => {
  const { email, username, password, age, phone__number } = req.body;

  try {
    const results = await db.query(
      'INSERT INTO users( email,username,password,age,phone__number) VALUES($1,$2,$3,$4,$5)',
      [email, username, password, age, phone__number]
    );
  } catch (error) {
    console.log(error);
  }
});

app.get('/api/profile', async (req, res) => {
  const results = await db.query('SELECT * from users');
  res.json({
    data: results,
  });
});

app.get('/api/messages', async (req, res) => {
  try {
    const messageSender = senderAndReciver.loggedInUser.trim();
    const messageReciever = senderAndReciver.user.trim();
    const query = {
      // give the query a unique name
      name: 'fetch-user',
      text: 'SELECT * FROM messages WHERE creator__id = $1 AND recipient__id   = $2 OR  creator__id =$2  AND recipient__id   =  $1',
      values: [messageSender, messageReciever],
    };
    const results = await db.query(query);
    // console.log(results.rows)
    res.json({
      data: results,
    });
    console.log('tried');
  } catch (error) {
    console.log(error);
  }
});
const senderAndReciver = {};

app.post('/api/userTosendmessage', (req, res) => {
  const { user, loggedInUser } = req.body;
  senderAndReciver.user = user;
  senderAndReciver.loggedInUser = loggedInUser;
  // console.log(senderAndReciver);
});

app.post('/api/messages', async (req, res) => {
  var id = Math.floor(1000 + Math.random() * 9000);
  let message__id = id;
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dateObj = new Date();
  const month = monthNames[dateObj.getMonth()];
  const day = String(dateObj.getDate()).padStart(2, '0');
  const year = dateObj.getFullYear();
  const created__date = month + '\n' + day + ',' + year;
  // console.log(req.body);
  // console.log(id, created__date, message__id);
  const { creator__id, message__body, recipient__id } = req.body;
  // console.log(creator__id);
  const results = await db.query(
    'INSERT INTO messages( id,creator__id  , message__body ,created__date,recipient__id ) VALUES($1,$2,$3,$4,$5)',
    [id, creator__id, message__body, created__date, recipient__id]
  );

  // res.json({
  //     data: results
  // })
});

function signUpMiddleWare(req, res, next) {
  const { username, email, password } = req.body;
  const user = { username, email, password };
  const token = jwt.sign(user, 'secretkeyricardo');
  res.json({
    token,
  });
  next();
}

function loginMiddleWare(req, res, next) {
  const user = req.body;
  const token = jwt.sign(user, 'secretkeyricardo');
  // res.json({
  //     token
  // });
  next();
}

server.listen(4000, () => {
  console.log('listening on *:4000');
});
