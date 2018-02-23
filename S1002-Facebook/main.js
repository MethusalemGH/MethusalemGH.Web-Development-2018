// Javascript for example Facebook

var database = [
  {
    username: 'Andrei',
    password: 'password'
  }
];

var newsfeed = [
  {
    username: 'Bobby',
    timeline: 'So tired from all that learning'
  },
  {
    username: 'Sally',
    timeline: 'Javascript is fun!'
  }
];

var userNamePrompt = window.prompt('What\'s your username?');
var userPasswordPrompt = window.prompt('What\'s your password?');

function signIn(username, password) {
  if (username === database[0].username && password === database[0].password) {
    window.alert('Hello ' + username);
    console.log(newsfeed);
  } else {
    window.alert('Who are you?');
  }
};

signIn(userNamePrompt, userPasswordPrompt);
