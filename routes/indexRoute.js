const express = require("express")
const indexRoute = express.Router();

const messages = [
  {
    id: crypto.randomUUID(),
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: crypto.randomUUID(),
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];



indexRoute.get("/", (req, res) => {
    res.render("index", {title: "Mini Message Board", messages: messages})
})

module.exports = {indexRoute, messages};