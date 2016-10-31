import {
  GameFields
}
from '../field';

describe('GameAPIController', () => {

  // describe('get /api/games', function() {
  //   let user;
  //   before(async() => {
  //     user = await User.findOne({
  //       where: {
  //         username: 'demo'
  //       }
  //     });
  //     sinon.stub(UserService, 'getLoginUser', (req) => {
  //       return user;
  //     });
  //   });
  //
  //   after((done) => {
  //     UserService.getLoginUser.restore();
  //     done();
  //   });
  //
  //   it('case 1', function(done) {
  //     request(sails.hooks.http.app)
  //       .get('/api/games')
  //       .end((err, res) => {
  //         let games = res.body;
  //         res.statusCode.should.be.equal(200);
  //         games.should.be.Arrays;
  //         games[0].should.have.keys(GameFields);
  //         done(err);
  //       });
  //   })
  // });
  //
  // it('get /api/games/:gameId', function(done) {
  //   request(sails.hooks.http.app)
  //     .get('/api/games/1')
  //     .end((err, res) => {
  //       let game = res.body;
  //       res.statusCode.should.be.equal(200);
  //       game.should.be.Object;
  //       game.should.have.keys(GameFields);
  //       done(err);
  //     });
  // })

});
