import {
  UserFieldsAndFollower
}
from '../field';

describe('FollowService', function() {

  it('follow', async(done) => {
    try {
      let loginUser = await User.findById(2);
      let result = await FollowService.follow(1, loginUser);
      result.should.be.equal(1);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('getMyFollow', async(done) => {
    try {
      let loginUser = await User.findById(2);
      let result = await FollowService.getMyFollow(1, loginUser);
      result[0].dataValues.should.have.keys(UserFieldsAndFollower);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('getFollowerCount', async(done) => {
    try {
      let result = await FollowService.getFollowerCount(1);
      result.should.be.equal(1);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('getFollowers', async(done) => {
    try {
      let loginUser = await User.findOne();
      let result = await FollowService.getFollowers(1);
      result[0].dataValues.should.have.keys(UserFieldsAndFollower);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('isMeFollowWithGamelistOwner', async(done) => {
    try {
      let loginUser = await User.findById(2);
      let gamelistId = 1;
      let result = await FollowService.isMeFollowWithGamelistOwner(
        gamelistId, loginUser);
      result.should.be.equal(true);
      done();
    } catch (e) {
      done(e);
    }
  });

  describe('isMeFollow', function() {
    it('true', async(done) => {
      try {
        let loginUser = await User.findById(2);
        let result = await FollowService.isMeFollow(1, loginUser);
        result.should.be.equal(true);
        done();
      } catch (e) {
        done(e);
      }
    });

    it('false', async(done) => {
      try {
        let loginUser = await User.findById(2);
        let result = await FollowService.isMeFollow(3, loginUser);
        result.should.be.equal(false);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

});
