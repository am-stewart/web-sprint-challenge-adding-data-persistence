exports.seed = function(knex, Promise) {
    return knex('resources').insert([
        { resource_name: 'shears', resource_description: 'pruning shears'},
        { resource_name: 'bulbs', resource_description: 'variety of flower bulbs'},
        { resource_name: 'wood', resource_description: 'wood for sink and shelf'},
        { resource_name: 'lights', resource_description: 'new light fixtures'},
        { resource_name: 'paint', resource_description: 'Sherwin Williams - Bright White'},
        { resource_name: 'drop cloth'},
        { resource_name: 'roller', resource_description: '18 inch roller'}
    ])
}