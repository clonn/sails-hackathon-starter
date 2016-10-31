describe('GameList', function() {
  it('add user', async(done) => {
    try {
      let gamelist = await GameList.findById(1);
      await gamelist.addUserLike(4);
      let result = await gamelist.hasUserLike(4);
      result.should.be.equal(true);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('remove user', async(done) => {
    try {
      let gamelist = await GameList.findById(1);
      await gamelist.removeUserLike(4);
      let result = await gamelist.hasUserLike(4);
      result.should.be.equal(false);
      done();
    } catch (e) {
      done(e);
    }
  });

});
