describe('HitCounterAPIController', () => {

  it('post /api/hits/:refType/:refId', function(done) {
    let refType = 'news';
    let refId = 2;
    request(sails.hooks.http.app)
      .post(`/api/hits/${refType}/${refId}`)
      .end((err, res) => {
        res.statusCode.should.be.equal(200);
        done(err);
      });
  })

  it('get /api/hits/:refType/:refId', function(done) {
    let refType = 'news';
    let refId = 2;
    request(sails.hooks.http.app)
      .get(`/api/hits/${refType}/${refId}`)
      .end((err, res) => {
        let result = res.body;
        res.statusCode.should.be.equal(200);
        result.should.be.Object;
        result.count.should.be.equal(1);
        done(err);
      });
  })

  it('get /api/hits/:refType', async(done) => {
    let refType = 'news';

    request(sails.hooks.http.app)
      .get(`/api/hits/${refType}`)
      .end((err, res) => {
        let result = res.body;
        res.statusCode.should.be.equal(200);
        result.should.be.Array;
        result.length.should.be.equal(1);
        done();
      });
  });
});
