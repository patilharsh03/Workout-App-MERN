require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose')
const path = require('path')
const workoutRoutes = require('./routes/workouts')

const app = express();

// middleware
app.use(express.json()) // built in express middleware

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts', workoutRoutes)

__dirname = path.resolve()
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
} else {

}

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`listening on port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log(err)
})