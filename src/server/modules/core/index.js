'use strict';

const routes = require('./routes');

exports.register = (server, options, next) => {
    server.route(routes);
    next();
}

exports.register.attributes = {
    name: 'CoreModule',
    version: '1.0.0'
};