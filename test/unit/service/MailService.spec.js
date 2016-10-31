const MAIL_FROM = 'sg_api@vm5.com';

describe('MailService', (done) => {

  let user;
  let req = {
    country: 'ja'
  };

  before(async() => {
    user = await User.findOne({
      where: {
        username: 'alincode'
      }
    });

    sinon.stub(MailService, 'sendSendGrid', (req) => {
      return true;
    });
  });

  after((done) => {
    MailService.sendSendGrid.restore();
    done();
  });

  it.skip('pure send email', async(done) => {
    try {
      var result = await MailService.sender({
        from: MAIL_FROM,
        to: 'clonncd@gmail.com',
        subject: 'hello',
        text: 'hello world!'
      });

      sails.log('debug', result);
      result.should.be.an.Object;
      result.message.should.be.a.String;
      result.message.should.be.equal('success');
      return done();
    } catch (e) {
      return done(e);
    }
  });

  it('preregistration', async(done) => {
    try {
      let result = await MailService.preregistration(1,
        'alincode@vm5.com');
      result.should.be.true;
      return done();
    } catch (e) {
      return done(e);
    }
  });

  it('resetPassword', async(done) => {
    try {
      let result = await MailService.resetPassword(user);
      result.should.be.true;
      return done();
    } catch (e) {
      return done(e);
    }
  });

  it('setPasswordSuccessful', async(done) => {
    try {
      let result = await MailService.setPasswordSuccessful(user);
      result.should.be.true;
      return done();
    } catch (e) {
      return done(e);
    }
  });

  it('verificationEmail', async(done) => {
    try {
      let result = await MailService.verificationEmail(user);
      result.should.be.true;
      return done();
    } catch (e) {
      return done(e);
    }
  });

  it('registerSuccessful', async(done) => {
    try {
      let result = await MailService.registerSuccessful(user, req);
      result.should.be.true;
      return done();
    } catch (e) {
      return done(e);
    }
  });

  it('createGamelistSuccessful', async(done) => {
    try {
      let result = await MailService.createGamelistSuccessful(user);
      result.should.be.true;
      return done();
    } catch (e) {
      return done(e);
    }
  });

});
