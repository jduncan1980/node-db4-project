const express = require('express');
const recipesRouter = require('./recipes/recipesRouter');
const logger = require('./middleware/logger');

const server = express();

server.use(express.json());
server.use(logger());
server.use('/api', recipesRouter);

server.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({ message: 'Something went wrong, try again...' });
});

module.exports = server;
