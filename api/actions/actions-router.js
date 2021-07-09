// Write your "actions" router here!
const express = require('express')
const Actions = require('./actions-model')

const router = express.Router()

const { validateActionId, validateActionBody, validateProjectId } = require('./actions-middlware')

// [GET] fetches array of actions
router.get('/', (req, res, next) => {
    Actions.get()
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(next)
})

// [GET] fetches action with given id
router.get('/:id', validateActionId, (req, res) => {
    res.status(200).json(req.action)
})

// [POST] creates and returns new action
router.post('/', validateActionBody, validateProjectId, (req, res, next) => {
    const { project_id, description, notes, completed } = req.body
    Actions.insert({ project_id, description, notes, completed })
    .then(newAction => {
        res.status(201).json(newAction)
    })
    .catch(next)
})

// [PUT] updates action with given id and returns updated action
router.put('/:id', validateActionId, validateActionBody, (req, res, next) => {
    const { id } = req.params
    const { project_id, description, notes, completed } = req.body
    Actions.update(id, {project_id, description, notes, completed})
    .then(updatedAction => {
        res.status(200).json(updatedAction)
    })
    .catch(next)
})

// [DELETE] deletes action with given id and returns no response body
router.delete('/:id', (req, res) => {
    console.log('delete is great success')
})

module.exports = router