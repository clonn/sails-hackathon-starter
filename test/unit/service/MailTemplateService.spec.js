describe('MailTemplateService', function() {

  it('getRegisterSuccessful', async(done) => {
    try {
      let result = await MailTemplateService.getRegisterSuccessful('en');
      result.should.be.equal('8e1875da-ab94-4b81-8edb-cebf6700b226');
      done();
    } catch (e) {
      done(e);
    }
  });

  it('getVerificationEmail', async(done) => {
    try {
      let result = await MailTemplateService.getVerificationEmail('en');
      result.should.be.equal('5a43324e-df98-4c76-b905-232c45fdae48');
      done();
    } catch (e) {
      done(e);
    }
  });

  it('getResetPassword', async(done) => {
    try {
      let result = await MailTemplateService.getResetPassword('en');
      result.should.be.equal('b815896a-1a43-46a1-a289-afb9e93a1499');
      done();
    } catch (e) {
      done(e);
    }
  });

  it('getCreateGamelistSuccessful', async(done) => {
    try {
      let result = await MailTemplateService.getCreateGamelistSuccessful(
        'en');
      result.should.be.equal('3ae4eccf-13f7-49f4-823d-778d3d2e04bd');
      done();
    } catch (e) {
      done(e);
    }
  });

  it('getPrereg', async(done) => {
    try {
      let result = await MailTemplateService.getPrereg('en');
      result.should.be.equal('3ae4eccf-13f7-49f4-823d-778d3d2e04bd');
      done();
    } catch (e) {
      done(e);
    }
  });
});
