describe('PostController', () => {

  it('# get /post', function(done) {
    let id = 2;
    request(sails.hooks.http.app)
      .get(`/post/${id}`)
      .end((err, res) => {
        let result = res.body;
        res.statusCode.should.be.equal(200);
        result.should.be.String;
        done(err);
      });
  })

  it('# get /post/list/1', function(done) {
    request(sails.hooks.http.app)
      .get(`/post/list/1`)
      .end((err, res) => {
        let result = res.body;
        res.statusCode.should.be.equal(200);
        result.should.be.String;
        done(err);
      });
  })

  describe('seo for post', () => {

    it('get SEO /post/42', function(done) {
      request(sails.hooks.http.app)
        .get('/post/42')
        .set('user-agent', 'Facebot')
        .end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          done(err);
        });
    })

    it('get SEO /post/list', function(done) {
      request(sails.hooks.http.app)
        .get('/post/list/1')
        .set('user-agent', 'Facebot')
        .end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          done(err);
        });
    })
  });



});
