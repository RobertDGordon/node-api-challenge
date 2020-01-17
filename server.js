const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('./projects/projects-router.js');
const actionsRouter = require('./actions/actions-router.js');

const server = express();

server.use(helmet());

server.use(express.json());
server.use(logger);

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Hello universe.</h2>`);
  });

function logger(req, res, next) {
    const { method, originalUrl } = req;
    console.log(`${method} to ${originalUrl}`);
  
    next();
  }

module.exports = server;