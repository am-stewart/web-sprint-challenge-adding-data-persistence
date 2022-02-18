const db = require('../../data/dbConfig')

const getProjects = () => {
    return db('projects')
}

///THIS CHANGES TO TRUE/FALSE IN SQLITE STUDIO:
// select case when task_completed = 1 
//             then 'true'
//             else 'false'
//        end as task_completed
// from tasks;

const getProjectById = (project_id) => {
    return db('projects').where('project_id', project_id).first()
}

async function createProject(project) {
    const [project_id] = await db('projects').insert(project)
    return getProjectById(project_id)
}



module.exports = {
    getProjects,
    getProjectById,
    createProject
}