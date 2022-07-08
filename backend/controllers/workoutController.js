const Workout = require('../models/workoutModel')

// get all workouts
const allWorkout = async (req, res) => {
    try {
        const workout = await Workout.find({}).sort({createdAt: -1})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// get a single workout
const singleWorkout = async (req, res) => {
    const {id} = req.params
    
    try {
        const workout = await Workout.findById(id)
        if(workout) {
        res.status(200).json(workout)
        }
    } catch (error) {
        res.status(404).json({error: 'No such workout'})
    }
}

// post a workout
const createWorkout = async (req, res) => {
    const {title, reps, load} = req.body

    try {
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({error: error.message})
    }
}

// delete a workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params

    try {
        const workout = await Workout.findOneAndDelete({_id: id})
        if (workout) {
        res.status(200).json(workout)
        }
    } catch (error) {
        res.status(400).json({error: "No such workout"})
    }
}

// upadte a workout
const updateWorkout = async (req, res) => {
    const {id} = req.params

    try {
        const workout = await Workout.findOneAndUpdate({_id: id}, {
            ...req.body
        })
        if(workout) {
            res.status(200).json(workout)
        }
    } catch (error) {
        res.status(400).json({error: "no such workout"})
    }
}

module.exports = {
    createWorkout,
    allWorkout,
    singleWorkout,
    deleteWorkout,
    updateWorkout
}