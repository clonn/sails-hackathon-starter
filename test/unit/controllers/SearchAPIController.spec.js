import {
  GameFields
}
from '../field';

describe('SearchAPIController', () => {
  it('# /api/search/:keyword', function(done) {
    request(sails.hooks.http.app)
      .get('/api/search/123')
      .end((err, res) => {
        let games = res.body;
        res.statusCode.should.be.equal(200);
        games.should.be.Arrays;
        let game = games[0];
        game.should.have.keys(GameFields);
        done(err);
      });
  })
});
