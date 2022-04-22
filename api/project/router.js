const router = require("express").Router(); //instantiate the router
const Project = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.getAllProjects();
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newProject = await Project.createProject(req.body);
    res.status(201).json(newProject);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "something went wrong with projects router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;