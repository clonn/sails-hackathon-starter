describe('HubbleAPIController', function() {
  it('post /api/hubble/:adplaySid', async(done) => {
    request(sails.hooks.http.app).post('/api/hubble/123').end((err, res) => {
      let result = res.body;
      res.statusCode.should.be.equal(200);
      done();
    });
  });
});
