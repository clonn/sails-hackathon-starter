import {
  GameListFieldsAndGameListItemsAndisMeLike
}
from '../field';


describe('UserLikeAPIController', function() {

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

  let gamelistId = 4;

  it('post /api/gamelists/:gamelistId/userlikes', async(done) => {
    request(sails.hooks.http.app)
      .post(`/api/gamelists/${gamelistId}/userlikes`)
      .end((err, res) => {
        let result = res.body;
        res.statusCode.should.be.equal(200);
        result.likeCount.should.be.equal(1);
        done(err);
      });
  });

  it('get /api/gamelists/:gamelistId/userlikes', async(done) => {
    request(sails.hooks.http.app)
      .get(`/api/gamelists/${gamelistId}/userlikes`)
      .end((err, res) => {
        let result = res.body;
        res.statusCode.should.be.equal(200);
        result.likeCount.should.be.equal(1);
        done(err);
      });
  });

  it('get /api/userlikes/:userId/gamelists', async(done) => {
    request(sails.hooks.http.app)
      .get(`/api/userlikes/${user.id}/gamelists`)
      .end((err, res) => {
        let result = res.body;
        res.statusCode.should.be.equal(200);
        result.should.be.Arrays;
        result[0].should.have.keys(
          GameListFieldsAndGameListItemsAndisMeLike);
        done(err);
      });
  });

});
