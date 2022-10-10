const mongoose = require("mongoose")

module.exports.Connect = async (connectionString) => {
    try {
        await mongoose.connect(connectionString)

        console.log("Connect mongodb success")
    } catch (error) {
        console.log(`Connect mongodb error: ${error}`)
    }
}