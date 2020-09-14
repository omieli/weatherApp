const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')



const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use(express.static(path.join(__dirname, '..', 'dist')))
app.use(express.static(path.join(__dirname,'..','node_modules')))

const api = require('./routes/api')
app.use('/', api)

mongoose.connect('mongodb://localhost/whetherAppDB', { useNewUrlParser: true , useUnifiedTopology: true })



const port = 3000
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})