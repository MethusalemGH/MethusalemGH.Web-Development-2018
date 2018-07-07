const express = require(`express`);
const parser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require(`cors`);

const signIn = require(`./routes/signin`);
const register = require(`./routes/register`);
const profile = require(`./routes/profile`);
const image = require(`./routes/image`);

const db = require(`knex`)({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'smart-brain'
  }
});

console.assert(bcrypt);

const app = express();
app.use(parser.json());
app.use(cors());

app.post(`/signin`, (req, res) => signIn.handleSignIn(req, res, db, bcrypt));
app.post(`/register`, (req, res) => register.handleRegister(req, res, db, bcrypt));
app.get('/profile/:id', (req, res) => profile.handleProfile(req, res, db));

// "/image" --> PUT = rank
app.put('/image', (req, res) => image.handleImage(req, res, db));

// Tell Express to listen for requests (start server)
const expressIP = 'localhost';
const expressPort = 3001;
app.listen(expressPort, expressIP, () => {
  console.log(`Server has started! Listening at PORT ${expressPort}, IP ${expressIP}.`);
});
