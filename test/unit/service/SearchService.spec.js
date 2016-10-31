import {
  GameFields
}
from '../field';

describe('SearchService', () => {
  beforeEach((done) => {
    CacheService.flush();
    done();
  });

  it('search Train', async(done) => {
    try {
      let games = await SearchService.get('Train');
      games.should.be.Arrays;
      let game = games[0].dataValues;
      game.should.have.keys(GameFields);
      done();
    } catch (e) {
      done(e);
    }
  });
});
