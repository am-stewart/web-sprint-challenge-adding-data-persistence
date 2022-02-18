// build your server here and require it from index.js
const express = require('express')
// ROUTERS
const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')


const server = express();

server.use(express.json())

server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)

server.use('*', (req, res, next) => { //eslint-disable-line
    res.json('something went wrong!')
})

module.exports = server;