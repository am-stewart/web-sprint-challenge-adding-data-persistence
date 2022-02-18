// build your `/api/projects` router here
const router = require('express').Router()
const { checkProjectId, checkProjectPayload } = require('./middleware')
const Projects = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const projects = await Projects.getProjects()
        res.json(projects)
    } catch(err) {
        next(err)
    }
})

router.get('/:id', checkProjectId, (req, res) => {
    res.json(req.project)
})

router.post('/', checkProjectPayload, async (req, res, next) => {
    try {
        const newProject = await Projects.createProject(req.body);
        res.status(201).json(newProject)
    } catch(err) {
        next(err)
    }
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;