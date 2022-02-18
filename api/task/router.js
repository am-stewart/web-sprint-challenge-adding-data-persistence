// build your `/api/tasks` router here
const router = require('express').Router()
const Tasks = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Tasks.getTasks()
        res.json(tasks)
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