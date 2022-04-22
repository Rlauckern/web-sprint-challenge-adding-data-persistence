const db = require("../../data/dbConfig");

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
  let project = await db("projects").where("project_id", id).first();
  project.project_completed === 0 || !project.project_completed
    ? (project.project_completed = false)
    : (project.project_completed = true);
  return project;
}

async function createProject(project) {
  const [project_id] = await db("projects").insert(project);
  return getProjectById(project_id);
}

module.exports = { getAllProjects, getProjectById, createProject };