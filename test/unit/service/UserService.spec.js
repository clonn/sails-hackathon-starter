import {
  UserFields
}
from '../field';

describe('UserService', () => {
  before(async() => {
    let user = await User.find();
    sinon.stub(UserService, 'getLoginUser', (req) => {
      return user;
    });
  });

  after((done) => {
    UserService.getLoginUser.restore();
    done();
  });

  describe('getUserByIdentifier', () => {
    let username = 'alincode';
    let email = 'alincode@vm5.com';

    it('username', async(done) => {
      try {
        let user = await UserService.getUserByIdentifier(username);
        user.dataValues.username.should.be.equal(username);
        done();
      } catch (e) {
        done(e);
      }
    });
    it('email', async(done) => {
      try {
        let user = await UserService.getUserByIdentifier(email);
        user.dataValues.username.should.be.equal(username);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  // TODO, need to fulfill account
  it('getFullCurrentUser', async(done) => {
    try {
      let currentUser = await User.findOne({
        where: {
          username: 'alincode'
        }
      });
      let user = await UserService.getCurrentFullUser(currentUser);
      user.Passports.should.be.an.Array;
      user.should.be.an.Object;
      done();
    } catch (e) {
      done(e);
    }
  });

  describe('resetPassword', function() {

    before(async() => {
      sinon.stub(MailService, 'sendSendGrid', (req) => {
        return true;
      });
    });

    after((done) => {
      MailService.sendSendGrid.restore();
      done();
    });

    it('case 1', async(done) => {
      try {
        let user = await User.findOne({
          where: {
            username: 'alincode'
          }
        });
        let result = await UserService.resetPassword(user);
        result.should.be.equal(true);
        done();
      } catch (e) {
        done(e);
      }
    });

  });

  it('setPassword', async(done) => {
    try {
      let user = await User.findOne({
        where: {
          username: 'demo3'
        }
      });
      let result = await PassportService.setPassword(user, 'password');
      result.should.be.equal(true);
      done();
    } catch (e) {
      done(e);
    }
  });

  describe('update', function() {
    let user;

    before(async() => {
      user = await User.findOne({
        where: {
          username: 'demo5'
        }
      });
      user = user.dataValues;
    });

    let data1 = {
      country: 'us'
    };

    it('update country first', async(done) => {
      try {
        let result = await UserService.update(user, data1);
        result = result.dataValues;
        result.should.have.keys(UserFields);
        result.country.should.be.equal(data1.country);
        result.lang.should.be.equal(user.lang);
        done();
      } catch (e) {
        done(e);
      }
    });

    let data2 = {
      lang: 'en'
    };

    it('then updat lang', async(done) => {
      try {
        let result = await UserService.update(user, data2);
        result = result.dataValues;
        result.should.have.keys(UserFields);
        result.country.should.be.equal(data1.country);
        result.lang.should.be.equal(data2.lang);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

});
