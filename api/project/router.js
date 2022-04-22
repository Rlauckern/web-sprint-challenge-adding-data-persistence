// build your `/api/projects` router here
const router = require('express').Router();
const Project = require('./model');

const { validateProject } = require('./middleware');

router.get('/', async (req, res, next) => {
    try {
        const projects = await Project.getAllProjects();
        res.json(projects);
    } catch(err) {
        next(err);
    }
})

router.post('/', validateProject, async (req, res, next) => {
    try {
        const newProject = await Project.createProject(req.body);
        res.status(201).json(newProject);
    } catch(err) {
        next(err);
    }
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        customMessage: 'something went wrong with the projects-router',
        message: err.message,
        stack: err.stack
    });
})

module.exports = router;