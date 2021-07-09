// Write your "actions" router here!
const express = require('express')
const Actions = require('./actions-model')

const router = express.Router()

const { validateActionId } = require('./actions-middlware')

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
router.post('/', (req, res) => {
    console.log('post is great success')
})

// [PUT] updates action with given id and returns updated action
router.put('/:id', (req, res) => {
    console.log('put is great success')
})

// [DELETE] deletes action with given id and returns no response body
router.delete('/:id', (req, res) => {
    console.log('delete is great success')
})

module.exports = router