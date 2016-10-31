describe('PreregistrationEmailService', function() {
  it('getRegistratedCount', async(done) => {
    try {
      let result = await PreregistrationEmailService.getRegistratedCount(
        4, 0);
      result.should.equal(3);
      done();
    } catch (e) {
      done(e);
    }
  });
});
