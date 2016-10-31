describe('CronService', function() {
  it('init', async(done) => {
    try {
      let result = await CronService.init();
      result.should.be.equal(true);
      done();
    } catch (e) {
      done(e);
    }
  });
});
