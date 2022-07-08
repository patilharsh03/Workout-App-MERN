const express = require('express')
const { createWorkout, allWorkout, singleWorkout, deleteWorkout, updateWorkout } = 
    require('../controllers/workoutController')

const router = express.Router()

router.get("/", allWorkout)

router.get("/:id", singleWorkout)

router.post("/", createWorkout)

router.delete("/:id", deleteWorkout)

router.patch("/:id", updateWorkout)

module.exports = router