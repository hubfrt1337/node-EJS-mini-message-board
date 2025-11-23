const express = require('express');
const newMessageRoute = express.Router();
const {messages} = require('./indexRoute')
newMessageRoute.get("/", (req, res) => {
    res.render("form")
})

newMessageRoute.post("/", (req, res) => {
    reqText = req.body.text;
    reqAuthor = req.body.author;
    messages.push({id: crypto.randomUUID(),text: reqText, user: reqAuthor, added: new Date()})
    res.redirect('/')
});

newMessageRoute.get("/message/:id", (req, res) => {
    const id = req.params.id;
    const message = messages.find(msg => msg.id === id)
    res.render("message", {title: "Message Details", message: message})
})
module.exports = newMessageRoute;