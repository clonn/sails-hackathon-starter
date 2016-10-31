import {
  VideoFields
}
from '../field';

describe('VideoController', function() {
  it('get /video/list/:pageId', async(done) => {
    request(sails.hooks.http.app).get('/video/list/1').end((err, res) => {
      let videos = res.body;
      res.statusCode.should.be.equal(200);
      done();
    });
  });

  describe('seo for video', () => {

    it('get SEO /video/list', function(done) {
      request(sails.hooks.http.app)
        .get('/video/list/1')
        .set('user-agent', 'Facebot')
        .end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          done(err);
        });
    })
  });
});
