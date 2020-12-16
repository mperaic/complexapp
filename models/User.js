const usersCollection = require("../db").collection("users")
const validator = require("validator")

let User = function(data) {
    this.data = data   
    this.errors = [] 
}

User.prototype.cleanUp = function() {
    if (typeof(this.data.username) != "string") {
        thid.data.username = ""
    }

    if (typeof(this.data.email) != "string") {
        thid.data.email = ""
    }

    if (typeof(this.data.password) != "string") {
        thid.data.password = ""
    }

    // get rid of any bogus properties
    this.data = {
        username: this.data.username.trim().toLowerCase(),
        email: this.data.email.trim().toLowerCase(),
        password: this.data.password
    }
}

User.prototype.validate = function() {
    if (this.data.username == "") {
        this.errors.push("You must provide a username.")
    }

    if (this.data.username != "" && !validator.isAlphanumeric(this.data.username)) {
        this.errors.push("Username can only contain letters and numbers.")
    }

    if (!validator.isEmail(this.data.email)) {
        this.errors.push("You must provide a valid email address.")
    }

    if (this.data.password == "") {
        this.errors.push("You must provide a password.")
    }

    if (this.data.password.length > 0 && this.data.password.length < 12) {
        this.errors.push("Password must be at least 12 chars.")
    }

    if (this.data.password.length > 100) {
        this.errors.push("Password cannot exceed 100 chars.")
    }

    if (this.data.username.length > 0 && this.data.password.length < 3) {
        this.errors.push("Username must be at least 3 chars.")
    }

    if (this.data.username.length > 30) {
        this.errors.push("Username cannot exceed 30 chars.")
    }
}

User.prototype.register = function() {
    // step 1 - validate user data
    this.cleanUp()
    this.validate()
    // step 2 - only if there are no validation errors
    // then save the user data into a database
    if (!this.errors.length) {
        usersCollection.insertOne(this.data)
    }
}

module.exports = User