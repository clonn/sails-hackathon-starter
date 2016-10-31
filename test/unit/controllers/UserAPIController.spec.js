import {
  GameListFieldsAndGameListItemsAndisMeLike, UserFields
}
from '../field';

describe('UserAPIController', () => {

  describe('demo user', () => {

    let user;
    before(async() => {
      user = await User.findOne({
        where: {
          username: 'demo'
        }
      });
      sinon.stub(UserService, 'getLoginUser', (req) => {
        return user;
      });
    });

    after((done) => {
      UserService.getLoginUser.restore();
      done();
    });

    it('# get /api/users/:userId/gamelists', function(done) {

      let fields = ['id', 'created_at', 'updated_at', 'title',
        'like',
        'count', 'UserId', 'GameListItems'
      ];

      request(sails.hooks.http.app)
        .get('/api/users/1/gamelists')
        .end((err, res) => {
          let gameLists = res.body;
          res.statusCode.should.be.equal(200);
          gameLists.should.be.Arrays;
          let gameList = gameLists[0];
          gameList.should.have.keys(
            GameListFieldsAndGameListItemsAndisMeLike);
          done(err);
        });
    })

    describe('resetpassword', function() {

      before(async() => {
        sinon.stub(MailService, 'sendSendGrid', (req) => {
          return true;
        });
      });

      after((done) => {
        MailService.sendSendGrid.restore();
        done();
      });

      it('# get /api/users/:email/resetpassword', function(done) {
        request(sails.hooks.http.app)
          .get('/api/users/alincode@vm5.com/resetpassword')
          .end((err, res) => {
            let result = res.body;
            res.statusCode.should.be.equal(200);
            done(err);
          });
      })
    });

    describe('# get /api/resetpassword/:token', function() {
      let token;
      before(async(done) => {
        try {
          token = JWTService.getResetpasswordToken(1);
          await CacheService.setResetPasswordToken(token);
          done();
        } catch (e) {
          done(e);
        }
      });

      it('true', function(done) {
        request(sails.hooks.http.app)
          .get(`/api/resetpassword/${token}`)
          .end((err, res) => {
            let result = res.body;
            res.statusCode.should.be.equal(302);
            res.header.location.should.be.equal(
              '/resetpassword');
            done(err);
          });
      });

      it('false', function(done) {
        request(sails.hooks.http.app)
          .get('/api/resetpassword/123')
          .end((err, res) => {
            let result = res.body;
            res.statusCode.should.be.equal(302);
            res.header.location.should.be.equal(
              '/resetpassword/error');
            done(err);
          });
      });
    });

    it('# post /api/password', function(done) {
      let data = {
        password: '12345678'
      };

      request(sails.hooks.http.app)
        .post('/api/password')
        .send(data)
        .end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          done(err);
        });
    })
  });

  describe('demo4 user', () => {

    let user;
    before(async() => {
      user = await User.findOne({
        where: {
          username: 'demo4'
        }
      });
      sinon.stub(UserService, 'getLoginUser', (req) => {
        return user;
      });
    });

    after((done) => {
      UserService.getLoginUser.restore();
      done();
    });

    it('# /api/users/:userId - case 1', function(done) {
      let data = {
        email: '123456789012345@facebook.com',
        country: 'us',
        lang: 'en',
      };

      request(sails.hooks.http.app)
        .patch(`/api/users/${user.id}`)
        .send(data)
        .end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          result.should.have.keys(['user']);
          result.user.should.have.keys(UserFields);
          done(err);
        });
    })

    it('# /api/users/:userId - case 2', function(done) {
      let data = {
        newEmail: 'demo4@user.com',
        email: '123456789012345@facebook.com',
        country: 'jp',
        lang: 'ja',
      };

      request(sails.hooks.http.app)
        .patch(`/api/users/${user.id}`)
        .send(data)
        .end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          result.should.have.keys(['user']);
          result.user.should.have.keys(UserFields);
          done(err);
        });
    })

    it('# /api/users/:userId - case 3', function(done) {
      let data = {
        country: 'tw',
      };

      request(sails.hooks.http.app)
        .patch(`/api/users/${user.id}`)
        .send(data)
        .end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          result.should.have.keys(['user']);
          result.user.should.have.keys(UserFields);
          done(err);
        });
    })
  });
});
