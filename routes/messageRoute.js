const express = require('express');
const newMessageRoute = express.Router();
const {messages} = require('./indexRoute')
newMessageRoute.get("/", (req, res) => {
    res.render("form")
})

newMessageRoute.post("/", (req, res) => {
    reqText = req.body.text;
    reqAuthor = req.body.author;
    messages.push({text: reqText, user: reqAuthor, added: new Date()})
    res.redirect('/')
});


module.exports = newMessageRoute;