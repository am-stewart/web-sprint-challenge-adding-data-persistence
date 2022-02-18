exports.seed = function(knex, Promise) {
    return knex('tasks').insert([
        { task_description: 'prune', task_notes: 'cut back dead plants and dig up what I dont want', task_completed: true, project_id: 1},
        { task_description: 'plant bulbs', task_notes: 'plant any new bulbs', task_completed: 0, project_id: 1},
        { task_description: 'water', task_notes: 'water daily', task_completed: 0, project_id: 1},
        { task_description: 'clean', task_notes: 'empty out laundry room', task_completed: 0, project_id: 2},
        { task_description: 'build shelf', task_notes: 'build new shelf to hold laundry items', task_completed: 0, project_id: 2},
        { task_description: 'move furniture', task_completed: 0, project_id: 3},
        { task_description: 'wash walls', task_notes: 'lightly wash walls before painting', task_completed: 0, project_id: 3}
    ])
}