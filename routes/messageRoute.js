const express = require('express');
const newMessageRoute = express.Router();
const db = require('../db/queries')
newMessageRoute.get("/", (req, res) => {
    res.render("form")
})

newMessageRoute.post("/", async (req, res) => {
    reqText = req.body.text;
    reqAuthor = req.body.author;
    await db.insertIntoMessages(reqAuthor, reqText)
    res.redirect('/')
});

newMessageRoute.get("/message/:id", async (req, res) => {
    const id = req.params.id;
    const messages = await db.getAllUsernames()
    const message = messages.find(msg => msg.id === Number(id))
    res.render("message", {title: "Message Details", message: message})
})
module.exports = newMessageRoute;