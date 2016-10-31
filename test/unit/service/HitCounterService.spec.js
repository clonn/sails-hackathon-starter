describe('HitCounterService', () => {

  it('hit news', async(done) => {
    try {
      let refType = 'news';
      let refId = 2;
      let result = await HitCounterService.hit(refType, refId);
      result.should.be.equal(true);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('hit gamelist', async(done) => {
    try {
      let refType = 'gamelist';
      let refId = 5;
      let result = await HitCounterService.hit(refType, refId);
      result.should.be.equal(true);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('get', async(done) => {
    try {
      let refType = 'gamelist';
      let refId = 5;
      let result = await HitCounterService.get(refType, refId);
      result.should.be.Object;
      result.dataValues.count.should.be.equal(1);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('getHitCounters', async(done) => {
    try {
      let refType = 'gamelist';
      let result = await HitCounterService.getHitCounters(refType);
      result.should.be.Arrays;
      result[0].dataValues.count.should.be.equal(1);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('getMergeList', async(done) => {
    try {
      let lists = [{
        dataValues: {
          id: 1,
          title: 'title 1'
        }
      }, {
        dataValues: {
          id: 2,
          title: 'title 2'
        }
      }, {
        dataValues: {
          id: 3,
          title: 'title 3'
        }
      }, {
        dataValues: {
          id: 6,
          title: 'title 6'
        }
      }];

      let counters = [{
        refId: 1,
        count: 10
      }, {
        refId: 2,
        count: 20
      }, {
        refId: 5,
        count: 12
      }, {
        refId: 6,
        count: 15
      }];
      let refType = 'gamelist';
      let result = await HitCounterService.getMergeList(lists, counters);
      result[0].dataValues.viewCount.should.be.equal(10);
      result[1].dataValues.viewCount.should.be.equal(20);
      result[2].dataValues.viewCount.should.be.equal(0);
      result[3].dataValues.viewCount.should.be.equal(15);
      done();
    } catch (e) {
      done(e);
    }
  })
});
