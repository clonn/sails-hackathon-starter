import fakeredis from 'fakeredis';
import redis from 'redis';
let client = fakeredis.createClient('test');

describe('CacheService', () => {

  before((done) => {
    CacheService.flush();
    done();
  });

  describe('basic operation for CacheService', async(done) => {
    beforeEach((done) => {
      CacheService.flush();
      done();
    });

    afterEach(function() {
      CacheService.flush();
    });

    it('set and get basic key and value', async(done) => {
      try {
        let key = 'test_hello';
        let value = {
          hello: 'world'
        };
        await CacheService.set(key, value, false);
        let result = await CacheService.get(key);
        result.should.be.keys(['hello']);
        result.hello.should.be.equal(value.hello);
        done();
      } catch (e) {
        done(e);
      }

    });

    it('set and expire basic key and value', async(done) => {
      try {
        let key = 'test_expire_key';
        let value = 'test_value';
        // setup 1 second
        let expireTime = 1;
        let sleepTime = 3 * 1000;

        await CacheService.set(key, value, expireTime);

        setTimeout(async() => {
          try {
            let result = await CacheService.get(key);
            should.not.exist(result);
            done();
          } catch (e) {
            done(e);
          }
        }, sleepTime);
      } catch (e) {
        done(e);
      }
    });

  });

  describe('ResetPasswordToke', function() {
    let token = 'xyz';
    it('setResetPasswordToken', async(done) => {
      try {
        let result = await CacheService.setResetPasswordToken(token);
        result.should.be.equal('OK');
        done();
      } catch (e) {
        done(e);
      }
    });

    it('getResetPasswordToken', async(done) => {
      try {
        let result = await CacheService.getResetPasswordToken();
        result.tokens[0].should.be.equal(token);
        done();
      } catch (e) {
        done(e);
      }
    });

    it('setResetPasswordToken again', async(done) => {
      try {
        await CacheService.setResetPasswordToken('you');
        let result = await CacheService.getResetPasswordToken();
        result.tokens[0].should.be.equal('xyz');
        result.tokens[1].should.be.equal('you');
        done();
      } catch (e) {
        done(e);
      }
    });

    it('isResetPasswordToken', async(done) => {
      try {
        let result = await CacheService.isResetPasswordToken('you');
        result.should.be.equal(true);
        done();
      } catch (e) {
        done(e);
      }
    });

    it('removeResetPasswordToken', async(done) => {
      try {
        await CacheService.removeResetPasswordToken('you');
        let result = await CacheService.getResetPasswordToken();
        result.tokens[0].should.be.equal('xyz');
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  it('set / get keyword', async(done) => {
    try {
      let keyword = '我愛中華，我愛中X';
      let games = [{
        'xxx01.yyy.zzz.com': 'test_0001'
      }, {
        'xxx02.yyy.zzz.com': 'test_0002'
      }, {
        'xxx03.yyy.zzz.com': 'test_0003'
      }];

      await CacheService.setKeyword(keyword, games);
      let result = await CacheService.getKeyword(keyword);
      result.should.be.an.Object;
      result.length.should.be.above(2);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('check is keyword existed', async(done) => {
    try {
      let keyword = '我愛中華，我愛中X' + new Date().valueOf();
      let result = await CacheService.isExistKeywordCache(keyword);
      result.should.be.Boolean;
      result.should.be.equal(false);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('hmset', async(done) => {
    client.hmset("keyword", ["test keys 1", "test val 1",
      "test keys 2",
      "test val 2"
    ], function(err, res) {
      res.should.be.equal('OK');
      done();
    });
  });

  it('expireat', (done) => {
    client.expireat('keyword', parseInt((+new Date) / 1000) + 86400);
    done();
  });

});
