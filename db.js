const mongodb = require ("mongodb")

const connectionString = "mongodb+srv://todoAppUser:todoappuser1@cluster0.jeo9w.mongodb.net/ComplexApp?retryWrites=true&w=majority"

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
    module.exports = client.db()
    const app = require("./app")
    app.listen(3000)
})