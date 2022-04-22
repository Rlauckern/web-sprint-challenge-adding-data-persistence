const router = require("express").Router(); //instantiate the router
const Resource = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const resources = await Resource.getAll();
    res.json(resources);
  } catch (err) {
    next(err);
  }
});

router.post(
  "/",
  async (req, res, next) => {
    try {
      const newResource = await Resource.createResource(req.body);
      res.status(201).json(newResource);
    } catch (err) {
      next(err);
    }
  }
);

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "something went wrong with resources router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;