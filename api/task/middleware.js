const Tasks = require("./model");

const checkTaskId = async (req, res, next) => {
  try {
    const task = await Tasks.getTaskByIdMiddleware(req.params.id);
    if (!task) {
      next({
        status: 404,
        message: `task with id ${req.params.id} does not exist`,
      });
    } else {
      req.task = task;
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkTaskPayload = async (req, res, next) => {
  if (!req.body.task_description || !req.body.project_id) {
    res
      .status(400)
      .json({ message: "task_description and project_id are required" });
  } else {
    next();
  }
};

module.exports = {
  checkTaskId,
  checkTaskPayload,
};
