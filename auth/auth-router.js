const bcrypt = require("bcryptjs");

const router = require("express").Router();

const Users = require("../users/users-model");

router.post("/register", (req, res) => {
  let users = req.body;

  const hash = bcrypt.hashSync(users.password, 10);

  users.password = hash;

  Users.newUser(users)
    .then(newuser => {
      res.status(201).json(newuser);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.getByUsername({ username })
    .first()
    .then(user => {
       // save a session for the client and send back a cookie
       req.session.user = user;
       
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ msg: `Welcome ${user.username}` });
      } else {
        res.status(400).json({ msg: "Invalid username or password!" });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
router.get("/logout", (req, res) => {
  if (req.session) {
      req.session.destroy(err => {
          if (err) {
              res.status(500).json({
                  you:
                      "can checkout any time you like, but you can never leave!",
              });
          } else {
              res.status(200).json({ bye: "thanks for playing" });
          }
      });
  } else {
      res.status(204);
  }
});

module.exports = router;
