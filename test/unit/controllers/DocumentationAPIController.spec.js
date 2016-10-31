describe('DocumentationAPIController', function() {
  it('/api/docs/:type', async(done) => {
    request(sails.hooks.http.app)
      .get('/api/docs/terms').end((err, res) => {
        let result = res.body;
        res.statusCode.should.be.equal(200);
        result.should.have.keys(['id', 'title', 'content', 'type',
          'country', 'created_at', 'updated_at'
        ]);
        done();
      });
  });
});
