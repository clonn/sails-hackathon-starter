import {
  PassportFields
}
from '../field';

describe('PassportService', () => {

  it('getLocalPassportByUserId', async(done) => {
    try {
      const passport = await PassportService.getLocalPassportByUserId(1);
      passport.dataValues.should.have.keys(PassportFields);
      done();
    } catch (e) {
      done(e);
    }
  });

  describe('isAbleUnbind', function() {
    it('true', async(done) => {
      try {
        const user = await User.findOne({
          where: {
            username: 'demo3'
          }
        })
        const result = await PassportService.isAbleUnbind(user);
        result.should.be.equal(true);
        done();
      } catch (e) {
        done(e);
      }
    });

    it('false', async(done) => {
      try {
        const user = await User.findOne({
          where: {
            username: 'demo4'
          }
        })
        const result = await PassportService.isAbleUnbind(user);
        result.should.be.equal(false);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

});
