describe('TrialController', function() {
  it('get /trial/list/:pageId', async(done) => {
    request(sails.hooks.http.app)
      .get('/trial/list/1').end((err, res) => {
        res.statusCode.should.be.equal(200);
        done();
      });
  });

  describe('seo for trial (now just for adplay)', () => {

    it('get SEO /trial/list', function(done) {
      request(sails.hooks.http.app)
        .get('/trial/list/1')
        .set('user-agent', 'Facebot')
        .end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          done(err);
        });
    })
  });
});
