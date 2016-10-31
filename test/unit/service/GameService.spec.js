import {
  GameFields
}
from '../field';

describe('GameService', () => {

  it('getGames', async(done) => {
    try {
      let games = await GameService.getGames('jp');
      games.should.be.Arrays;
      let game = games[0].toJSON();
      game.should.have.keys(GameFields);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('fetchGameListAndInsertDB', async(done) => {
    try {
      let games = await GameService.fetchGameListAndInsertDB('en', 'us',
        10);
      games.should.be.Arrays;
      let game = games[0].toJSON();
      game.should.have.keys(GameFields);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('getGameAndUpdateGameInfo', async(done) => {
    try {
      let game = await GameService.getGameAndUpdateGameInfo(1);
      game = game.dataValues;
      game.should.be.Object;
      game.should.have.keys(GameFields);
      done();
    } catch (e) {
      done(e);
    }
  });


});
