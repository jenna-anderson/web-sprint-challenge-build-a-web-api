const express = require('express');
const { errorHandling, notFound } = require('./middleware')
const server = express();

server.use(express.json())

const projectsRouter = require('./projects/projects-router')
const actionsRouter = require('./actions/actions-router')

server.use('/api/projects', projectsRouter)
server.use('/api/actions', actionsRouter)

server.use('*', notFound)

server.use(errorHandling)

module.exports = server
