// build your `/api/resources` router here
const router = require('express').Router();
const Resource = require('./model');
const { validateResource } = require('./middleware');

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resource.getAllResources();
        res.json(resources);
    } catch(err) {
        next(err);
    }
})

router.post('/', validateResource, async (req, res, next) => {
    try {
        const newResource = await Resource.createResource(req.body);
        res.status(201).json(newResource);
    } catch(err) {
        next(err);
    }
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        customMessage: 'something went wrong with the resources-router',
        message: err.message,
        stack: err.stack
    });
})

module.exports = router;