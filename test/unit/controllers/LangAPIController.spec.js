describe('LangAPIController', function() {

  it('get /api/lang/en', function(done) {
    request(sails.hooks.http.app)
      .get('/api/lang/en')
      .end((err, res) => {
        let result = res.body;
        res.statusCode.should.be.equal(302);
        done(err);
      });
  });

  it('get /api/country', function(done) {
    request(sails.hooks.http.app)
      .get('/api/country')
      .end((err, res) => {
        let result = res.body;
        res.statusCode.should.be.equal(200);
        result.should.have.keys(['country']);
        result.country.should.be.equal('jp');
        done(err);
      });
  });

  it('get /api/timezone', function(done) {
    request(sails.hooks.http.app)
      .get('/api/timezone')
      .end((err, res) => {
        let result = res.body;
        res.statusCode.should.be.equal(200);
        result.should.have.keys(['timezone']);
        result.timezone.should.be.equal('Asia/Tokyo');
        done(err);
      });
  });
});
