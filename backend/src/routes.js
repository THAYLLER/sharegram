const express = require('express');

const FeedController = require('./controllers/FeedController');
const AuthorController = require('./controllers/AuthorController');

const routes = express.Router();

routes.post('/feeds',FeedController.store);
routes.get('/feeds',FeedController.index);
routes.post('/authors',AuthorController.store);
routes.get('/authors',AuthorController.index);

module.exports = routes;

