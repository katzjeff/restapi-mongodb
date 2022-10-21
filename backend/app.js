const express = require("express")
const dotenv = require("dotenv").config()
const colors = require('colors')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require("./config/db")
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/test', require('./routes/routes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server is runing on port ${port}`));