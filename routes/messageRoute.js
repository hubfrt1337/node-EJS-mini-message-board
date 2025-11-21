const express = require('express');
const newMessageRoute = express.Router();

newMessageRoute.get("/", (req, res) => {
    res.render("form")
})

newMessageRoute.post("/", (req, res) => {
    
    res.send("Message received!");
});
module.exports = newMessageRoute;