describe('UserController', () => {
  before(async() => {
    let user = await User.find();
    sinon.stub(UserService, 'getLoginUser', (req) => {
      return user;
    });
  });

  after((done) => {
    UserService.getLoginUser.restore();
    done();
  });

  it('get /user/:userId', function(done) {
    request(sails.hooks.http.app)
      .get('/user/1')
      .end((err, res) => {
        let result = res.body;
        res.statusCode.should.be.equal(200);
        result.should.be.String;
        done();
      });
  })

  it('get /user/setting/info', function(done) {
    request(sails.hooks.http.app)
      .get('/user/setting/info')
      .end((err, res) => {
        let result = res.body;
        res.statusCode.should.be.equal(200);
        done();
      });
  })

  it('get /user/setting/community', function(done) {
    request(sails.hooks.http.app)
      .get('/user/setting/community')
      .end((err, res) => {
        let result = res.body;
        res.statusCode.should.be.equal(200);
        done();
      });
  })

  it('get /user/documentation/terms', function(done) {
    request(sails.hooks.http.app)
      .get('/user/documentation/terms')
      .end((err, res) => {
        let result = res.body;
        res.statusCode.should.be.equal(200);
        done();
      });
  })
});
