describe('VerificationAPIController', () => {

  describe('send verification email', () => {
    let user;

    before(async(done) => {
      user = await User.findOne();
      done();
    });

    it('# post /api/verification', async(done) => {
      let data = {
        email: user.email
      };

      request(sails.hooks.http.app)
        .post(`/api/verification`)
        .send(data)
        .end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          done();
        });
    })
  });

  let token;
  describe('get /api/verification/:token', () => {

    before(async(done) => {
      try {
        token = JWTService.getResetpasswordToken(1);
        done();
      } catch (e) {
        done(e);
      }
    });

    after(async(done) => {
      try {
        await CacheService.flush();
        done();
      } catch (e) {
        done(e);
      }
    });

    it('# successful', async(done) => {
      const user = await User.findOne();
      request(sails.hooks.http.app)
        .get(`/api/verification/${token}`)
        .end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(302);
          res.header.location.should.be.equal(
            '/verification/successful');
          done();
        });
    })

    it('# error', async(done) => {
      const user = await User.findOne();
      request(sails.hooks.http.app)
        .get(`/api/verification/123`)
        .end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(500);
          done();
        });
    })
  });

});
