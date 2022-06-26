const express = require('express');

const recipesRouter = require('./recipes/recipes-router');

const server = express();

server.use(express.json());

server.use('/api/recipes', recipesRouter);

server.use('*', (request, response, next) => {
    next({ status: 404, message: 'That URL was not found.' });
});

server.use((error, request, response, next) => {
    response.status(error.status || 500).json({
        message: error.message || 'An error occurred within the recipes router.',
        stack: error.stack
    });
});

module.exports = server;