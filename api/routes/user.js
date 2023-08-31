const user = require("express").Router()

user.get("/usertest", (req, res) => {
    res.send("user test is done")
})

module.exports = user