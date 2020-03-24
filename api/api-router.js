const router = require('express').Router();

const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');
const restricted = require('./restricted-middleware');


router.use('/auth', authRouter);
router.use('/users', restricted, usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "API server is running correctly" });
});

module.exports = router;
