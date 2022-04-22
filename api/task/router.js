// build your `/api/tasks` router here
const router = require('express').Router();
const Task = require('./model');
const { checkProjectIdExists, validateTask } = require('./middleware');

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.getAllTasks();
        res.json(tasks);
    } catch(err) {
        next(err);
    }
})

router.post('/', validateTask, checkProjectIdExists, async (req, res, next) => {
    try {
        const newTask = await Task.createTask(req.body);
        res.status(201).json(newTask);
    } catch(err) {
        next(err);
    }
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        customMessage: 'something went wrong with the task-router',
        message: err.message,
        stack: err.stack
    });
})

module.exports = router;