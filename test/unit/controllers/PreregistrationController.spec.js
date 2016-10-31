describe('PreregistrationController', () => {

  it('# get /preregistration', function(done) {
    request(sails.hooks.http.app)
      .get('/preregistration')
      .end((err, res) => {
        let result = res.body;
        res.statusCode.should.be.equal(200);
        done(err);
      });
  });


  it('# get /preregistration/1', function(done) {
    request(sails.hooks.http.app)
      .get('/preregistration/1')
      .end((err, res) => {
        let result = res.body;
        res.statusCode.should.be.equal(200);
        result.should.be.String;
        done(err);
      });
  });

  describe('seo for preregistration page', () => {

    it('get SEO /preregistration/1', function(done) {
      request(sails.hooks.http.app)
        .get('/preregistration/1')
        .set('user-agent', 'Facebot')
        .end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          done(err);
        });
    });
  });

});
