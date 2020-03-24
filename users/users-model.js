const db = require("../database/db-config");

module.exports = {
  getUsers,
  newUser,
  getById,
  getByUsername
};

function getUsers() {
  return db("users").select("id", "username");
}

function getById(id) {
  return db("users")
    .select("id", "username")
    .where({ id })
    .first();
}

function newUser(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return getById(id);
    });
}

function getByUsername(name) {
  return db("users")
    .select("id", "username", "password")
    .where(name);
}
