const router = require("express").Router(); //instantiate the router
const Task = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.getAllTasks();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newTask = await Task.createTask(req.body);
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "something went wrong with task router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;