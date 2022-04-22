// build your `Project` model here
const db = require('../../data/dbConfig');

async function getAllProjects() {
    let projects = await db("projects");
    projects.forEach((project) => {
      project.project_completed === 0 || !project.project_completed
        ? (project.project_completed = false)
        : (project.project_completed = true);
    });
    return projects;
  }
async function getProjectById(id) {
    const [project] = await db('projects')
        .where('project_id', id);

    if(project) {
        project.project_complete = !!project.project_completed;
    }
    return project;
}

async function createProject(project) {
    const [id] = await db('projects')
        .insert(project);

    const created = await getProjectById(id);
    return created;
}

module.exports = { getAllProjects, getProjectById, createProject };