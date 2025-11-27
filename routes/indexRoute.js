const express = require("express")
const indexRoute = express.Router();
const db = require("../db/queries")




indexRoute.get("/", async (req, res) => {
  const usernames = await db.getAllUsernames();
    res.render("index", {title: "Mini Message Board", messages: usernames})
})

module.exports = {indexRoute};