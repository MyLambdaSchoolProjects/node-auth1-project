const express = require('express');

const apiRouter = require('./api-router');
const midware =require('./midware');

const server = express();

midware(server);

server.use('/api', apiRouter);

module.exports = server;