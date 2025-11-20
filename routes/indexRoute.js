const express = require("express")
const indexRoute = express.Router();

indexRoute.get("/" , (req, res) => {
    res.send("Index site")
})
indexRoute.get("/:id", (req, res) => {
    const {id} = req.params;
    res.send(`Index id is equal to: ${id}`);
})

module.exports = indexRoute;