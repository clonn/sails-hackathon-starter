import {
  PreregistrationFields, PreregistrationAndPlatformFields
}
from '../field';

describe('PreregistrationService', () => {

  describe('getPre', function() {
    it('case 1', async(done) => {
      try {
        const result = await PreregistrationService.getPre(2, null);
        result.dataValues.id.should.equal(3);
        done();
      } catch (e) {
        done(e);
      }
    });

    it('case 2', async(done) => {
      try {
        const result = await PreregistrationService.getPre(3, null);
        expect(result).to.be.empty;
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  describe('getNext', function() {
    it('case 1', async(done) => {
      try {
        const result = await PreregistrationService.getNext(2, null);
        result.dataValues.id.should.equal(1);
        done();
      } catch (e) {
        done(e);
      }
    });

    it('case 2', async(done) => {
      try {
        const result = await PreregistrationService.getNext(3, null);
        result.dataValues.id.should.equal(2);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  describe('register', function() {

    it('preregistrationWorkInit', async(done) => {
      try {
        const result = await MessageQueueService.preregistrationWorkInit();
        done();
      } catch (e) {
        done(e);
      }
    });

    it('success', async(done) => {
      try {
        const email = 'alincode100@vm5.com';
        const result = await PreregistrationService.register(4,
          email, 0, 'jp');
        result.message.should.be.equal('');
        result.success.should.be.equal(true);
        done();
      } catch (e) {
        done(e);
      }
    });

    it.skip('duplicate', async(done) => {
      try {
        const email = 'alincode100@vm5.com';
        setTimeout('console.log("waiting 3 min")', 3000);
        const result = await PreregistrationService.register(4,
          email, 0, 'jp');
        result.message.should.be.equal('registered');
        result.success.should.be.equal(false);
        done();
      } catch (e) {
        done(e);
      }
    });

    it.skip('message duplicate', async(done) => {
      try {
        const email = 'alincode100@vm5.com';
        const result = await PreregistrationService.message(4,
          0, email, 'jp');
        result.should.be.equal('registered');
        done();
      } catch (e) {
        done(e);
      }
    });

    it('message region error', async(done) => {
      try {
        const email = 'alincode101@vm5.com';
        const result = await PreregistrationService.message(4,
          0, email, 'tw');
        result.should.be.equal('region_limit');
        done();
      } catch (e) {
        done(e);
      }
    });

    it('race register', async(done) => {
      try {
        await Promise.all([
          PreregistrationService.register(1,
            'alincode1@vm5.com', 0, 'jp'),
          PreregistrationService.register(1,
            'alincode2@vm5.com', 0, 'jp'),
          PreregistrationService.register(1,
            'alincode3@vm5.com', 0, 'jp'),
          PreregistrationService.register(1,
            'alincode4@vm5.com', 0, 'jp'),
          PreregistrationService.register(1,
            'alincode5@vm5.com', 0, 'jp'),
          PreregistrationService.register(1,
            'alincode6@vm5.com', 0, 'jp'),
          PreregistrationService.register(1,
            'alincode7@vm5.com', 0, 'jp'),
          PreregistrationService.register(1,
            'alincode8@vm5.com', 0, 'jp'),
          done()
        ]);

      } catch (e) {
        done(e);
      }
    });

    it.skip('getPreregEmails', async(done) => {
      try {
        let result = await PreregistrationService.getPreregEmails(1);
        result.length.should.be.equal(4);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  it('getPreregs', async(done) => {
    try {
      let preregistrations = await PreregistrationService.getPreregs(
        'jp');
      preregistrations.should.be.Arrays;
      preregistrations[0].dataValues.should.have.keys(
        PreregistrationAndPlatformFields);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('savePreregistration', async(done) => {
    const data = {
      icon: 'https://lh6.ggpht.com/jywOylUEhU0S-SCloWO1DyxBitf0ndV_9EFbj_hOmxFqEVia4V0DnvE6S3imz-3_xM8=w300',
      title: 'save unit test ゲームの事前登録',
      description: 'description description description description description',
      cover: 'http://static5.gamespot.com/uploads/scale_large/1551/15511094/3085390-image_0.img.jpg',
      startDate: new Date(),
      endDate: '2050/10/10',
      country: 'jp',
      developer: 'VMFive Inc.',
      wpId: 1,
      PreregistrationPlatforms: [{
        "platform": 0,
        "registrated": 0,
        "quota": 1000,
        "free": true,
        "PreregistrationId": 4
      }, {
        "platform": 1,
        "registrated": 0,
        "quota": 1000,
        "free": true,
        "PreregistrationId": 4
      }]
    }

    try {
      await PreregistrationService.savePreregistration(data);

      const result = await Preregistration.findOne({
        where: {
          wpId: data.wpId
        },
        include: [PreregistrationPlatform]
      })

      result.dataValues.title.should.equal(data.title);
      result.PreregistrationPlatforms[0].dataValues.quota.should
        .equal(data.PreregistrationPlatforms[0].quota)
      done();
    } catch (e) {
      done(e);
    }

  });
});
