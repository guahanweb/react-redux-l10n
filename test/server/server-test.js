const expect = require('chai').expect;
const request = require('supertest');
const sinon = require('sinon');

const Server = require('../../server');

describe('Server:', function () {
  let port = 4118;
  let server;

  before(function (done) {
    Server({ port: port }).then(function (s) {
      server = s;
      done();
    });
  });

  it ('should expose the /service-status endpoint', function () {
    request(server.listener)
      .get('/service-status')
      .expect(200)
      .then(response => {
        expect(response.body).to.equal('GOOD');
      });
  });
});
