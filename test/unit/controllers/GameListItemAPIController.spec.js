import {
  GameListItemFields
}
from '../field';

describe('GameListItemAPIController', () => {

  before(async() => {
    let user = await User.findById(1);
    sinon.stub(UserService, 'getLoginUser', (req) => {
      return user;
    });
  });

  after((done) => {
    UserService.getLoginUser.restore();
    done();
  });

  it('# post /api/gamelistItems', function(done) {

    let data = {
      GameListId: 1,
      GameListItems: [{
        GameId: 4,
        description: 'game 1 description'
      }, {
        GameId: 5,
        description: 'game 2 description'
      }, {
        GameId: 6,
        description: 'game 3 description'
      }]
    };

    request(sails.hooks.http.app)
      .post('/api/gamelistItems')
      .send(data)
      .end((err, res) => {
        let gamelistItems = res.body;
        res.statusCode.should.be.equal(200);
        gamelistItems.should.be.Arrays;
        gamelistItems.length.should.be.equal(3);
        gamelistItems[0].should.have.keys(GameListItemFields);
        gamelistItems[0].GameId.should.be.equal(data.GameListItems[0]
          .GameId);
        gamelistItems[0].description.should.be.equal(data.GameListItems[
            0]
          .description);
        done(err);
      });
  })
});
