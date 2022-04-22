const db = require("../../data/dbConfig");

const getAll = () => {
  return db("resources");
};

const getById = (id) => {
  return db("resources").where("resource_id", id).first();
};

const createResource = async (resource) => {
  const [resource_id] = await db("resources").insert(resource);
  return getById(resource_id);
};

module.exports = { getAll, getById, createResource };