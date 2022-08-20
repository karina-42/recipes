//requires
const express = require('express')
const app = express() 
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const recipesRoutes = require('./routes/recipes')

require('dotenv').config({path: './config/.env'})

//db connection
connectDB()

//middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//ROUTES
app.use('/', homeRoutes)
app.use('/recipes', recipesRoutes)

//listen
app.listen(process.env.PORT, () => {
  console.log(`Go catch the server at port ${process.env.PORT}`);
})