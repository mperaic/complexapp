const apiRouter = require("express").Router()

apiRouter.post("/login", function(req, res) {
    res.json("Thanks for login from api!")
})

module.exports = apiRouter