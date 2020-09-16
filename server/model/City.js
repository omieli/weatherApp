const mongoose = require('mongoose')
const Schema = mongoose.Schema

const citySchema = new Schema({
    name: String,
    temperature: String,
    conditions: String,
    conditionPic: String
})

const City = mongoose.model("city", citySchema)
module.exports = City



