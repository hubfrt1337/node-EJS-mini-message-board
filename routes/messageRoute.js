const express = require('express');
const newMessageRoute = express.Router();
const db = require('../db/queries')
const { body, validationResult, matchedData } = require("express-validator")

const validateUser = [
    body("author").trim()
        .isLength({min: 3, max: 15}).withMessage("Username must be between 3 and 15 characters"),
    body("text").trim()
        .isAlpha().withMessage("Message must contains only letters")
        .isLength({max: 200}).withMessage("Message can't be longer than 200 characters"),
]

newMessageRoute.get("/", (req, res) => {
    res.render("form", {msg: undefined} )
})

newMessageRoute.post("/", [validateUser,  async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        let errMsg;
        errors.array().forEach(err => {
            errMsg = err.msg;
        })
        return res.status(400).render("form", {msg: errMsg} )
    }
    const { author, text } = matchedData(req)
    await db.insertIntoMessages(author, text)
    res.redirect('/')
} ]);

newMessageRoute.get("/message/:id", async (req, res) => {
    const id = req.params.id;
    const messages = await db.getAllUsernames()
    const message = messages.find(msg => msg.id === Number(id))
    res.render("message", {title: "Message Details", message: message})
})
module.exports = newMessageRoute;