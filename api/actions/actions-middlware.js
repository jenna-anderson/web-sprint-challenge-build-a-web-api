// add middlewares here related to actions
const express = require('express')
const Actions = require('./actions-model')

const validateActionId = (req, res, next) => {
    const { id } = req.params
    Actions.get(id)
    .then(action => {
        if(!action){
            res.status(404).json({
                message: "no action with given id found"
            })
        } else {
            req.action = action
            next()
        }
    })
    .catch(next)
}

const validateActionBody = (req, res, next) => {
    const { project_id, description, notes } = req.body
    if(!project_id || !description || description.length > 128 || !notes) {
        res.status(400).json({
            message: "missing or invalid fields"
        })
    } else {
        next()
    }
}

module.exports = {
    validateActionId, 
    validateActionBody
}