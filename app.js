const express = require('express');
const app = express();
const indexRoute = require('./routes/indexRoute')
const newMessageRoute = require('./routes/messageRoute')


app.set("view engine", "ejs")
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


app.use('/new', newMessageRoute);
app.use('/', indexRoute);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

