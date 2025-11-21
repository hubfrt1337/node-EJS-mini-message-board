const express = require('express');
const newMessageRoute = express.Router();

newMessageRoute.get("/", (req, res) => {
    res.render("index", {message: message})
})

module.exports = newMessageRoute;