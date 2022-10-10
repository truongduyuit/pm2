require('dotenv').config()

const express = require("express")
const mongo = require("./mongoose")

const PORT = process.env.PORT || 3001
const MONGODB_URL = process.env.MONGODB_URL

const app = express()

mongo.Connect(MONGODB_URL)

app.get("/", (req, res) => {
    return res.json({success: true})
})

app.use((err, req, res, next) => {
    return res.json({success: false})
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))