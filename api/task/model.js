// build your `Task` model here
const db = require("../../data/dbConfig");

const getTasks = async () => {
  const tasks = await db("tasks as t")
    .leftJoin("projects as p", "t.project_id", "p.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );

  return tasks.map((task) => {
    if (task.task_completed === 1) {
      return {
        ...task,
        task_completed: true,
      };
    } else {
      return {
        ...task,
        task_completed: false,
      };
    }
  });
};

const getTaskByIdMiddleware = (task_id) => {
  return db("tasks").where("task_id", task_id).first();
};

const getTaskById = async (task_id) => {
  const task = await db("tasks").where("task_id", task_id).first();

  if (task.task_completed === 1) {
    return {
      ...task,
      task_completed: true,
    };
  } else {
    return {
      ...task,
      task_completed: false,
    };
  }
};

async function createTask(task) {
  const [task_id] = await db("tasks").insert(task);
  return getTaskById(task_id);
}

module.exports = {
  getTasks,
  getTaskByIdMiddleware,
  getTaskById,
  createTask,
};
