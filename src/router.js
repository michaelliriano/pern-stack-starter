const publicRouter = require('./routes/public/index');
const userRouter = require('./routes/api/users/index');

const router = (app) => {
  app.use('/public', publicRouter);
  app.use('/api/user', userRouter);
};

module.exports = router;
