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

indexRoute.get("/" , (req, res) => {
    res.send("Index site")
})
indexRoute.get("/:id", (req, res) => {
    const {id} = req.params;
    res.render("index", {title: "Mini Message Board", messages: messages})
   // res.send(`Index id is equal to: ${id}`);
})

module.exports = indexRoute;