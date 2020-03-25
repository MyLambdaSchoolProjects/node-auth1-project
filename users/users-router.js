const router = require('express').Router();

const Users = require("./users-model");

//const restricted = require('../api/restricted-middleware');//for basic authorization

router.get("/", (req, res) => {
  Users.getUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
