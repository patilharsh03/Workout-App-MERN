require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

const app = express();

// middleware
app.use(express.json()) // built in express middleware

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts', workoutRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`listening on port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log(err)
})