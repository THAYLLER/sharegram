const express = require('express');

const FeedController = require('./controllers/FeedController');
const AuthorController = require('./controllers/AuthorController');

const routes = express.Router();

routes.post('/feeds',FeedController.store);
routes.post('/authors',AuthorController.store)

module.exports = routes;

