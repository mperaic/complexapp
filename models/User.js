let User = function(data) {
    this.data = data   
    this.errors = [] 
}

User.prototype.validate = function() {
    if (this.data.username == "") {
        this.errors.push("You must provide a username.")
    }

    if (this.data.email == "") {
        this.errors.push("You must provide a valid email address.")
    }
    
    if (this.data.password == "") {
        this.errors.push("You must provide a password.")
    }
}

User.prototype.register = function() {
    // step 1 - validate user data
    this.validate()
    // step 2 - only if there are no 
    // validation errors
    // then save the user data into a database
}

module.exports = User