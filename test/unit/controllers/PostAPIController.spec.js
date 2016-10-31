import {
  PostFields
}
from '../field';

describe('PostAPIController', function() {
  it('get /api/posts', async(done) => {
    request(sails.hooks.http.app).get('/api/posts').end((err, res) => {
      let result = res.body;
      res.statusCode.should.be.equal(200);
      result[0].should.have.keys(PostFields);
      done();
    });
  });

  it('get /api/posts/pages/:pageId', async(done) => {
    request(sails.hooks.http.app)
      .get('/api/posts/pages/1').end((err, res) => {
        let result = res.body;
        res.statusCode.should.be.equal(200);
        result.should.have.keys(['count', 'rows']);
        result.rows[0].should.have.keys(['date', 'data']);
        const row = result.rows[0];
        row.date.should.equal(moment().format('YYYY/MM/DD'));
        done();
      });
  });
});
