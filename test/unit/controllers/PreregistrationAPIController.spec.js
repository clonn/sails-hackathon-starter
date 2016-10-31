import {
  PreregistrationFields, PreregistrationAndPlatformFields
}
from '../field';

describe('PreregistrationAPIController', () => {

  const data = {
    email: 'alincode@vm5.com',
    platform: 0
  };

  it('# get /api/preregistrations/:preregistrationId', (done) => {
    request(sails.hooks.http.app)
      .get('/api/preregistrations/1')
      .end((err, res) => {
        let preregistration = res.body;
        res.statusCode.should.be.equal(200);
        preregistration.should.be.Object;
        preregistration.should.have.keys(
          PreregistrationAndPlatformFields);
        done(err);
      });
  })

  it('# post /api/preregistrations/:preregistrationId', (done) => {
    request(sails.hooks.http.app)
      .post('/api/preregistrations/1')
      .send(data)
      .end((err, res) => {
        let result = res.body;
        res.statusCode.should.be.equal(200);
        result.success.should.be.equal(true);
        done(err);
      });
  })

  it('# get /api/preregistrations/:preregistrationId/message', (done) => {
    request(sails.hooks.http.app)
      .post('/api/preregistrations/1/message')
      .send(data)
      .end((err, res) => {
        let result = res.body;
        res.statusCode.should.be.equal(200);
        // TODO sync message
        // result.message.should.equal('registered');
        done(err);
      });
  })

});
