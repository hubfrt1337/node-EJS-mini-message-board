const express = require('express');
const newMessageRoute = express.Router();

newMessageRoute.get("/", (req, res) => {
    res.render("form")
})

newMessageRoute.post("/", (req, res) => {
    console.log(req.body.author, "pieski");
    res.send("Message received!");
});
module.exports = newMessageRoute;