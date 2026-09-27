const { Router } = require('express');
const UsersController = require('../controllers/UsersController');

const routes = Router();
const usersController = new UsersController();

routes.post('/users/create', usersController.create);
routes.get('/users/show', usersController.show);
routes.put('/users/update/:id', usersController.update);
routes.delete('/users/delete/:id', usersController.delete);

module.exports = routes;
