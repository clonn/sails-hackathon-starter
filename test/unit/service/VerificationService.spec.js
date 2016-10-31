describe('VerificationService', () => {

  describe('isFakeEmail', () => {
    it('# yes', async(done) => {
      try {
        let result = await VerificationService.isFakeEmail(
          '1000001@facebook.com');
        result.should.be.equal.true;
        done();
      } catch (e) {
        done(e);
      }
    })
    it('# no', async(done) => {
      try {
        let result = await VerificationService.isFakeEmail(
          'ooxx@gmail.com');
        result.should.be.equal(false);
        done();
      } catch (e) {
        done(e);
      }
    })
  });

  it('# sendVerificationEmail', async(done) => {
    try {
      let user = await User.findOne();
      let result = await VerificationService.sendVerificationEmail(
        user.email);
      result.should.be.equal.true;
      done();
    } catch (e) {
      done(e);
    }
  })

  describe('verificationEmail', () => {
    const userId = 1;

    it('# verification', async(done) => {
      try {

        let result = await VerificationService.verificationEmail(
          JWTService.issueToken({
            sub: userId
          }));
        result.should.be.equal.true;
        done();
      } catch (e) {
        done(e);
      }
    })

    it('# check verification is true', async(done) => {
      try {
        const user = await User.findById(userId);
        user.dataValues.verification.should.be.equal(true);
        done();
      } catch (e) {
        done(e);
      }
    })
  });


});
