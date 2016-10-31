describe('RegionService', function() {

  describe('getCountry logined', function() {
    before(async() => {
      let user = await User.findById(1);
      sinon.stub(UserService, 'getLoginUser', (req) => {
        return user;
      });
    });

    after((done) => {
      UserService.getLoginUser.restore();
      done();
    });

    it('case 1', async(done) => {
      try {
        let result = await RegionService.getCountry();
        result.should.equal('jp');
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  describe('getCountry not login', function() {
    before(async() => {
      sinon.stub(UserService, 'getLoginUser', (req) => {
        return;
      });
    });

    after((done) => {
      UserService.getLoginUser.restore();
      done();
    });

    it('case 1', async(done) => {
      try {
        let result = await RegionService.getCountry();
        result.should.equal('jp');
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  it('timezone', async(done) => {
    try {
      let result = await RegionService.getTimeZone();
      result.should.equal('Asia/Tokyo');
      done();
    } catch (e) {
      done(e);
    }
  });

  it('getLang', async(done) => {
    try {
      let result = await RegionService.getLang('tw');
      result.should.equal('zh');
      done();
    } catch (e) {
      done(e);
    }
  });

});
