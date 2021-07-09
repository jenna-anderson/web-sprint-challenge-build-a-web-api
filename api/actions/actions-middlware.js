// add middlewares here related to actions
const express = require('express')
const Actions = require('./actions-model')
const Projects = require('../projects/projects-model')

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

const validateProjectId = (req, res, next) => {
    const { project_id } = req.body
    Projects.get(project_id)
    .then(project => {
        if(project) {
            next()
        } else {
            next({
                status: 404,
                message: "project with given id not found"
            })
        }
    })
}

module.exports = {
    validateActionId, 
    validateActionBody, 
    validateProjectId
}