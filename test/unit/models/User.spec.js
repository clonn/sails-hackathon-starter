// var should = require("chai").should;

describe('User model spec', (done) => {
  describe('create user', (done) => {
    it('create user by model', async(done) => {
      try {
        let newUser = {
          username: 'TestUser01',
          email: 'TestUser01@test.com'
        };

        let createdUser = await User.create(newUser);
        createdUser.toJSON();
        createdUser.username.should.equal('TestUser01');

        done();
      } catch (e) {
        done(e);
      }
    });
  });
});
