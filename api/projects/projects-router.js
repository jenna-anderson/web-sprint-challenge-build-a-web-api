// Write your "projects" router here!
const express = require('express')
const Projects = require('./projects-model')

const router = express.Router()

// [GET] fetches array of projects
router.get('/', (req, res) => {
    console.log('get is great success')
})

// [GET] fetches project based on id
router.get('/:id', (req, res) => {
    console.log('get by id is great success')
})

// [POST] creates and returns new project
router.post('/', (req, res) => {
    console.log('post is great success')
})

// [PUT] updates project and returns updated project
router.put('/:id', (req, res) => {
    console.log('put is great success')
})

// [DELETE] deletes project and returns no response body
router.delete('/:id', (req, res) => {
    console.log('delete is great success')
})

// [GET] fetches array of action belonging to project with given id
router.get('/:id/actions', (req, res) => {
    console.log('get actions is great success')
})

module.exports = router