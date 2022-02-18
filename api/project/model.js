const db = require('../../data/dbConfig')

const getProjects = async () => {
    const projects = await db('projects')

    return projects.map(project => {
        if(project.project_completed === 1) {
            return {
                ...project,
                project_completed: true
            }
    } else {
        return {
            ...project,
            project_completed: false
        }
    }
  })
}

// const getProjectById = (project_id) => {
//     return db('projects').where('project_id', project_id).first()
// }
const getProjectById = async (project_id) => {
    const project = await db('projects').where('project_id', project_id).first()

    if(project.project_completed === 1) {
        return {
            ...project,
            project_completed: true
        }
    } else {
        return {
            ...project,
            project_completed: false
        }
    }
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