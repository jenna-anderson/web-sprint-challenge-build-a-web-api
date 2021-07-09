// Write your "actions" router here!
const express = require('express')
const Actions = require('./actions-model')

const router = express.Router()

// [GET] fetches array of actions
router.get('/', (req, res) => {
    console.log('get is great success')
})

// [GET] fetches action with given id
router.get('/:id', (req, res) => {
    console.log('get action by id is great success')
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