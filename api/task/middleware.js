// const Project = require('./../project/model');

// async function validateTask(req, res, next) {
//     if(!req.body.task_description || !req.body.task_description.trim()) {
//         next({ status: 400, message: 'task description is required' });
//     } else if(!req.body.project_id) {
//         next({ status: 400, message: 'project id is required' });
//     } else {
//         next();
//     }
// }

// async function checkProjectIdExists(req, res, next) {
//     const project = await Project.getProjectById(req.body.project_id);

//     !project
//         ? next({ status: 404, message: `a project with id ${req.body.project_id} does not exist` })
//         : next();
// }

// module.exports = { validateTask, checkProjectIdExists };