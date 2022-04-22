// build your `Resource` model here
const db = require('../../data/dbConfig');

async function getAllResources() {
    const resources = await db('resources');
    return resources;
}

async function getResourceById(id) {
    const [resource] = await db('resources')
        .where('resource_id', id);
    return resource;
}

async function createResource(resource) {
    const [id] = await db('resources')
        .insert(resource);

    const created = await getResourceById(id);
    return created;
}

module.exports = { getAllResources, getResourceById, createResource };