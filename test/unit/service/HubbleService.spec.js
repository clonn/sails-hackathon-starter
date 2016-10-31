describe('HubbleService', function() {
  it('sendEventToHubbleAPI', async(done) => {
    try {
      await HubbleService.sendEventToHubbleAPI('123', '123');
      done();
    } catch (e) {
      done(e);
    }
  });
});
