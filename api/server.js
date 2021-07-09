const express = require('express');
const { errorHandling } = require('./projects/projects-middleware');
const server = express();

server.use(express.json())

const projectsRouter = require('./projects/projects-router')
const actionsRouter = require('./actions/actions-router')

server.use('/api/projects', projectsRouter)
server.use('/api/actions', actionsRouter)

server.use(errorHandling)
// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
