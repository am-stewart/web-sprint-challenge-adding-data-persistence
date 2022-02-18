const Projects = require("./model");

const checkProjectId = async (req, res, next) => {
  try {
    const project = await Projects.getProjectByIdMiddleware(req.params.id);
    if (!project) {
      next({
        status: 404,
        message: `project with id ${req.params.id} does not exist`,
      });
    } else {
      req.project = project;
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkProjectPayload = async (req, res, next) => {
  if (!req.body.project_name) {
    res.status(400).json({ message: "project name is required" });
  } else {
    next();
  }
};

module.exports = {
  checkProjectId,
  checkProjectPayload,
};
