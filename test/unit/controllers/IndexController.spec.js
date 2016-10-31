describe('IndexController', () => {

  it('get /', function(done) {
    request(sails.hooks.http.app)
      .get('/')
      .end((err, res) => {
        let result = res.body;
        res.statusCode.should.be.equal(200);
        done(err);
      });
  })

});
