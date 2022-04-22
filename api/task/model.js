// build your `Task` model here
const db = require('../../data/dbConfig');

async function getAllTasks() {
    const tasks = await db('tasks as t')
        .select(
            't.task_id',
            't.task_description',
            't.task_notes',
            't.task_completed',
            'p.project_name',
            'p.project_description'
        )
        .join('projects as p', 't.project_id', 'p.project_id');

    tasks.forEach((task) => {
        task.task_completed = !!task.task_completed
    })
    return tasks;
}

async function getTaskById(id) {
    const [task] = await db('tasks')
        .where('task_id', id);

    task.task_completed = !!task.task_completed
    return task;
}

async function createTask(task) {
    const [id] = await db('tasks')
        .insert(task);

    const created = await getTaskById(id);
    return created;
}

module.exports = { getAllTasks, getTaskById, createTask };