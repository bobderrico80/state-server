const express = require('express');
const { urlencoded } = require('body-parser');
const lookupState = require('./src/lookup-state');

const logger = console;
const isDefined = value => typeof value !== 'undefined';
const app = express();
const port = 8080;

// Middleware for parsing urlencoded bodies
app.use(urlencoded({ extended: true }));

// Main route for getting state names from longitude/latitude
app.post('/', (req, res) => {
  if (isDefined(req.body.longitude) && isDefined(req.body.latitude)) {
    const state = lookupState(req.body.longitude, req.body.latitude);
    res.status(200).send(state);
    return;
  }

  res.status(400).send('Bad request: latitude and longitude required');
});

// Missing route handler
app.use((req, res) => {
  res.status(404).send('Not found');
});

// Error handler
app.use((err, req, res, _next) => {
  logger.error(err);
  res.status(500).send('Internal server error');
});

// Start server
app.listen(port, () => logger.info(`State server listening on port ${port}`));
