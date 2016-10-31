import {
  AdplayFields
}
from '../field';

describe('AdPlayAPIController', function() {

  it('get /api/adplays', async(done) => {
    request(sails.hooks.http.app)
      .get('/api/adplays')
      .end((err, res) => {
        let result = res.body;
        res.statusCode.should.be.equal(200);
        result.should.be.Arrays;
        result[0].should.have.keys(AdplayFields);
        done();
      });
  });

  it('get /api/adplays/pages/:pageId', async(done) => {
    try {
      request(sails.hooks.http.app)
        .get('/api/adplays/pages/1')
        .end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          result.should.have.keys(['count', 'rows']);
          result.rows.should.be.Arrays;
          result.rows[0].should.have.keys(AdplayFields);
          done();
        });
    } catch (e) {
      done(e);
    }

  });
});
