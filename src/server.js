require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;
const ENVIORMENT = process.env.NODE_ENV || 'development';

require('./router')(app);

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`${ENVIORMENT} server running on http://localhost:${PORT}`);
  /* eslint-enable no-console */
});
