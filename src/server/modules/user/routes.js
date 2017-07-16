'use strict';

const userController = require('./controllers/userController');

module.exports = [
    {
        method: 'GET',
        path: '/api/users',
        handler: userController.getUsers
    },
    {
        method: 'POST',
        path: '/api/users',
        handler: userController.createUser
    },
    {
        method: 'DELETE',
        path: '/api/users',
        handler: userController.deleteUser
    }
];

