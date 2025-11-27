const express = require("express")
const indexRoute = express.Router();
const db = require("../db/queries")

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



indexRoute.get("/", async (req, res) => {
  const usernames = await db.getAllUsernames();
  console.log(usernames)
    res.render("index", {title: "Mini Message Board", messages: usernames})
})

module.exports = {indexRoute, messages};