'use strict';
const newrelic = process.env.NEW_RELIC_LICENSE_KEY ? require('newrelic') : {
  addCustomParameter: function(){},
  addCustomParameters: function(){}
};
const Hapi = require('hapi');
const path = require('path');

const port = process.env.PORT || 4118;
const pjson = require('../package');

let server = new Hapi.Server();
server.connection({
  port: port,
  routes: {
    files: {
      relativeTo: path.resolve(__dirname, '../dist')
    }
  }
});

let plugins = [
  {
    register: require('hapi-and-healthy'),
    options: {
      env: process.env.APP_ENV || 'development',
      name: pjson.name,
      version: pjson.version
    }
  },
  require('inert'),
  require('vision')
];

// load any non-development plugins here

server.register(plugins, err => {
  if (err) throw err;

  server.views({
    engines: { pug: require('pug') },
    path: path.join(__dirname, 'templates'),
    compileOptions: {
      pretty: true
    }
  });

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply.view('index');
    }
  });

  server.start(() => {
    console.log(`running on http://localhost:${port}`);
  });
});
