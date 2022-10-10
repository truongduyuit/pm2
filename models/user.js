const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    donated: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: "normal"
    }
}, {
    collection: "Users",
    timestamps: true
})

module.exports.UserSchema = mongoose.model("Users", schema)