const usersCollection = require("../db").db().collection("users")
const followsCollection = require("../db").db().collection("follows")
let Follow = function(followedUsername, authorId) {
    this.followedUsername = followedUsername
    this.authorId = authorId
    this.errors = []
}

Follow.prototype.cleanUp = async function() {
    if (typeof(this.followedUsername) != "string") {
        this.followedUsername = ""
    }
}

Follow.prototype.validate = function() {
// followedUsername must exist in db
let followedAccount = await usersCollection.findOne({username: this.followedUsername})
}

Follow.prototype.create = function() {
    return new Promise((resolve, reject) => {
        this.cleanUp()
        this.validate()
    })
}

module.exports = Follow