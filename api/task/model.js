// build your `Task` model here
const db = require('../../data/dbConfig')

const getTasks = () => {
    return db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed',
        'p.project_name', 'p.project_description')
}

const getTaskById = (task_id) => {
    return db('tasks').where('task_id', task_id).first()
}

async function createTask(task) {
    const [task_id] = await db('tasks').insert(task)
    return getTaskById(task_id)
}

module.exports = {
    getTasks,
    getTaskById,
    createTask
}

//
// SELECT t.task_id, t.task_description, t.task_notes, t.task_completed, p.project_name, p.project_description FROM tasks as t
//     LEFT JOIN projects as p 
//     ON t.project_id = p.project_id