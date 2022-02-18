const router = require('express').Router()
const { checkTaskId, checkTaskPayload } = require('./middleware')
const Tasks = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Tasks.getTasks()
        res.json(tasks)
    } catch(err) {
        next(err)
    }
})

router.get('/:id', checkTaskId, (req, res) => {
    res.json(req.task)
})

router.post('/', checkTaskPayload, async (req, res, next) => {
    try {
        const newTask = await Tasks.createTask(req.body)
        res.status(201).json(newTask)
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