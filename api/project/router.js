// build your `/api/projects` router here
const router = require('express').Router()

router.use('/', (req, res) => {
    res.json({ projectApi: 'up'})
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;