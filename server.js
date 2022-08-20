const express = require('express')
const app = express()
const mongoose = require('mongoose') 
require('dotenv').config()
const PORT = 8000

app.listen(PORT, () => {
  console.log(`Go catch the server at port ${PORT}`);
})