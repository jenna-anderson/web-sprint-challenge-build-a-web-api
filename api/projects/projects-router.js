// Write your "projects" router here!
const express = require('express')
const Projects = require('./projects-model')

const router = express.Router()

const { validateProjectId, validateProjectBody } = require('./projects-middleware')

// [GET] fetches array of projects
router.get('/', (req, res, next) => {
    Projects.get()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(next)
})

// [GET] fetches project based on id
router.get('/:id', validateProjectId, (req, res, next) => {
    res.json(req.project)
})

// [POST] creates and returns new project
router.post('/', validateProjectBody, (req, res, next) => {
    const {name, description, completed} = req.body
    Projects.insert({name, description, completed})
    .then(newProject => {
        res.status(201).json(newProject)
    })
    .catch(next)
})

// [PUT] updates project and returns updated project
router.put('/:id', validateProjectId, validateProjectBody, (req, res, next) => {
    const { id } = req.params
    const {name, description, completed} = req.body
    if("completed" in req.body){
        Projects.update(id, {name, description, completed})
        .then(updatedProject => {
            res.status(200).json(updatedProject)
        })
        .catch(next)
    } else {
        res.status(400).json({
            message: "missing name, description, and/or completed fields"
        })
    }
})

// [DELETE] deletes project and returns no response body
router.delete('/:id', validateProjectId, (req, res, next) => {
    const { id } = req.params
    Projects.remove(id)
    .then(() => {
        res.json({message: `successfully deleted project with id ${id}`})
    })
    .catch(next)
})

// [GET] fetches array of action belonging to project with given id
router.get('/:id/actions', (req, res) => {
    console.log('get actions is great success')
})

module.exports = router