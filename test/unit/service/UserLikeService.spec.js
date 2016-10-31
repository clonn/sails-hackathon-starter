describe('UserLikeService', function() {

  describe('like', function() {
    let userId = 6;
    let gamelistId = 1;

    it('first time', async(done) => {
      try {
        let result = await UserLikeService.like(userId, gamelistId);
        result.should.be.equal(1);
        done();
      } catch (e) {
        done(e);
      }
    });

    it('second time', async(done) => {
      try {
        let result = await UserLikeService.like(userId, gamelistId);
        result.should.be.equal(0);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

});
