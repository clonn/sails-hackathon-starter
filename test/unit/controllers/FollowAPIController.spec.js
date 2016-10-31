import {
  UserFields, UserFieldsAndFollower
}
from '../field';

describe('FollowAPIController', function() {
  describe('case 1', function() {
    before(async() => {
      let user = await User.findById(2);
      sinon.stub(UserService, 'getLoginUser', (req) => {
        return user;
      });
    });

    after((done) => {
      UserService.getLoginUser.restore();
      done();
    });

    it('post /api/follows/:userId', async(done) => {
      request(sails.hooks.http.app)
        .post('/api/follows/1').end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          result.should.have.keys(['fanCount']);
          result.fanCount.should.be.equal(1);
          done();
        });
    });

    it('get /api/fans/:userId', async(done) => {
      request(sails.hooks.http.app)
        .get('/api/fans/1').end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          result.should.be.Arrays;
          result[0].should.have.keys(UserFieldsAndFollower);
          done();
        });
    });

    it('get /api/gamelists/:gamelistId/follow', async(done) => {
      request(sails.hooks.http.app)
        .get('/api/gamelists/1/follow').end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          result.isMeFollow.should.be.equal(true);
          done();
        });
    });

    it('get /api/fans/:userId', async(done) => {
      request(sails.hooks.http.app)
        .get('/api/fans/1').end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          result.should.be.Arrays;
          result[0].should.have.keys(UserFieldsAndFollower);
          done();
        });
    });

    it('get /api/follows/:userId', async(done) => {
      request(sails.hooks.http.app)
        .get('/api/follows/2').end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          result.should.be.Arrays;
          result[0].should.have.keys(UserFieldsAndFollower);
          done();
        });
    });

    it('not allow', async(done) => {
      request(sails.hooks.http.app)
        .get('/api/follows/1').end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(403);
          done();
        });
    });

    it('cancel follow', async(done) => {
      request(sails.hooks.http.app)
        .post('/api/follows/1').end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          result.should.have.keys(['fanCount']);
          result.fanCount.should.be.equal(0);
          done();
        });
    });

  });
});
