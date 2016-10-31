import {
  VideoFields
}
from '../field';

describe('VideoAPIController', function() {
  it('get /api/videos', async(done) => {
    request(sails.hooks.http.app).get('/api/videos').end((err, res) => {
      let videos = res.body;
      res.statusCode.should.be.equal(200);
      videos.should.be.Arrays;
      let video = videos[0];
      video.should.have.keys(VideoFields);
      done();
    });
  });

  it('get /api/videos/pages/:pageId', async(done) => {
    request(sails.hooks.http.app)
      .get('/api/videos/pages/1').end((err, res) => {
        let result = res.body;
        res.statusCode.should.be.equal(200);
        result.should.have.keys(['count', 'rows']);
        result.rows.should.be.Arrays;
        result.rows[0].should.have.keys(VideoFields);
        done();
      });
  });
});
