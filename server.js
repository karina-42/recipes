const express = require('express')
const app = express()
const mongoose = require('mongoose') 
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')

require('dotenv').config({path: './config/.env'})
const PORT = 8000

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', homeRoutes)

app.listen(PORT, () => {
  console.log(`Go catch the server at port ${PORT}`);
})