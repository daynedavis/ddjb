'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const Path = require('path');
const mongoose = require('mongoose');

const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, '../../dist')
      }
    }
  }
});

mongoose.connect('mongodb://db:27017/hrdb');

if (process.env.NODE_ENV === 'production') {
  console.log('Production mode');
  server.connection({ port: 8080 });
} else {
    console.log('Develop mode');
  server.connection({ port: 3000 });
}

server.register([Inert, require('./modules/user'), require('./modules/core')], () => {});

server.start((err) => {
  if (err) {
    throw err;
  }

  console.log(`Server running at: ${server.info.uri}`);
});
