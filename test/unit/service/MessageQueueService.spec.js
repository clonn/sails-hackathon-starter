describe('MessageQueueService', function() {
  it('init', async(done) => {
    try {
      let result = await MessageQueueService.init('test');
      result.should.be.equal(1);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('send', async(done) => {
    try {
      let result = await MessageQueueService.send('test', 'hello world');
      result.should.be.String;
      done();
    } catch (e) {
      done(e);
    }
  });

  it('receive', async(done) => {
    try {
      let result = await MessageQueueService.receive('test');
      result.should.have.keys(["fr", "id", "message", "rc", "sent"]);
      result.message.should.be.equal('hello world');
      done();
    } catch (e) {
      done(e);
    }
  });
});
