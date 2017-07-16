'use strict';

module.exports = [
  {
    method: 'GET',
    path: '/assets/{filename}',
    handler: {
      file: (request) => {
        return request.params.filename;
      }
    }
  },
  {
    method: 'GET',
    path: '/{path*}',
    handler: (request, reply) => {
      reply.file('index.html');
    }
  }
];