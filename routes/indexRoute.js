const express = require("express")
const indexRoute = express.Router();


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


indexRoute.get("/", (req, res) => {
    res.render("index", {title: "Mini Message Board", messages: messages})
})

module.exports = {indexRoute, messages};