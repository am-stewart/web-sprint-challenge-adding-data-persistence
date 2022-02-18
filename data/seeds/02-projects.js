exports.seed = function(knex, Promise) {
    return knex('projects').insert([
        { project_name: 'plant garden', project_description: 'add beautiful cutting flowers to backyard'},
        { project_name: 'redo laundry room', project_description: 'makeover the laundry room with updates'},
        { project_name: 'paint bedroom', project_completed: true}
    ])
}