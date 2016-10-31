describe('AuthAPIController', () => {

  describe('# register local user flow', () => {
    let formData = {
      'username': 'alincode2',
      'email': 'alin.code@exma-square.co',
      'password': '11111111'
    };

    it('register successful', function(done) {
      request(sails.hooks.http.app)
        .post('/api/auth/local/register')
        .send(formData)
        .end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(302);
          res.header.location.should.equal('/');
          done(err);
        });
    });

    it('register failure', function(done) {
      request(sails.hooks.http.app)
        .post('/api/auth/local/register')
        .send(formData)
        .end((err, res) => {
          res.statusCode.should.be.equal(302);
          res.header.location.should.equal('/#!/register');
          done(err);
        });
    });


    it('logout successful', function(done) {
      request(sails.hooks.http.app)
        .post('/api/auth/local/logout')
        .end((err, res) => {
          res.statusCode.should.be.equal(302);
          res.header.location.should.equal('/#!/login');
          done(err);
        });
    });
  })

  describe('# login local user flow', () => {

    it('login failure', function(done) {
      let formData = {
        identifier: 'demo',
        password: '123456'
      };

      request(sails.hooks.http.app)
        .post('/api/auth/local')
        .set('Accept', 'application/json')
        .send(formData)
        .end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(302);
          res.header.location.should.equal('/#!/login');
          done(err);
        });
    });

    it('login successful', function(done) {
      let formData = {
        identifier: 'demo',
        password: '11111111'
      };

      request(sails.hooks.http.app)
        .post('/api/auth/local')
        .send(formData)
        .end((err, res) => {
          res.statusCode.should.be.equal(302);
          res.header.location.should.equal('/');
          done(err);
        });
    });
  })
});
