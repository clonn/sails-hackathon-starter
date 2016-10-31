describe('WpAPIController', function() {

  describe('syncAdplay offline', function() {

    before(async(done) => {
      let data = {
        "post_id": 47,
        "post_type": "adplay",
        "ad_id": "com.rayark.implosion",
        "title": "インプロージョン",
        "cover": "//lh3.googleusercontent.com/zp4zs_ipZ8JCr0L_vFlv480MVHW9vpl3IGMaTFHRDLRosPjg1LavMGqXb3lZGyx2Eg=w300",
        "icon": "//lh3.googleusercontent.com/zp4zs_ipZ8JCr0L_vFlv480MVHW9vpl3IGMaTFHRDLRosPjg1LavMGqXb3lZGyx2Eg=w300",
        "country": "jp",
        "google_play_url": "https://play.google.com/store/apps/details?id=com.zeptolab.ctr.ads&hl=ja&gl=jp",
        "status": "online"
      };

      sinon.stub(WpService, 'backendSync', (req) => {
        return data;
      });
      done();
    });

    after((done) => {
      WpService.backendSync.restore();
      done();
    });

    it('get /api/wp/webhook/adplays/:wpId', async(done) => {
      request(sails.hooks.http.app).get(
        '/api/wp/webhook/adplays/47').end(
        (err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          done();
        });
    });
  });

  describe('syncAdplay offline', function() {

    before(async(done) => {
      let data = {
        "post_id": 47,
        "post_type": "adplay",
        "ad_id": "com.rayark.implosion",
        "title": "インプロージョン",
        "cover": "//lh3.googleusercontent.com/zp4zs_ipZ8JCr0L_vFlv480MVHW9vpl3IGMaTFHRDLRosPjg1LavMGqXb3lZGyx2Eg=w300",
        "icon": "//lh3.googleusercontent.com/zp4zs_ipZ8JCr0L_vFlv480MVHW9vpl3IGMaTFHRDLRosPjg1LavMGqXb3lZGyx2Eg=w300",
        "country": "jp",
        "google_play_url": "https://play.google.com/store/apps/details?id=com.zeptolab.ctr.ads&hl=ja&gl=jp",
        "status": "offline"
      };

      sinon.stub(WpService, 'backendSync', (req) => {
        return data;
      });
      done();
    });

    after((done) => {
      WpService.backendSync.restore();
      done();
    });

    it('get /api/wp/webhook/adplays/:wpId', async(done) => {
      request(sails.hooks.http.app).get(
        '/api/wp/webhook/adplays/47').end(
        (err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          done();
        });
    });
  });

  describe('syncPost online', function() {

    before(async(done) => {
      let data = {
        "post_id": 22,
        "post_type": "article",
        "title": "よめいく恋愛SLG「虹色カノジョ２d」",
        "icon": "//lh3.googleusercontent.com/G-m6v3udV343f9IAralUSX0OA-IX1OVSwGtk6w-6ZzgzekW0Y6GBiJ6E-pI-V16pvCYe=w300",
        "cover": "//lh3.googleusercontent.com/G-m6v3udV343f9IAralUSX0OA-IX1OVSwGtk6w-6ZzgzekW0Y6GBiJ6E-pI-V16pvCYe=w300",
        "content": "<p>株式会社エイチーム(本社：愛知県名古屋市、代表取締役社長：林高生、以下エイチーム)は、世界(※一部の国を除く)のiOS/Android（TM）向けに配信し、累計500万ダウンロードを突破した新感覚リアルタイムRPG",
        "google_play_url": "https://play.google.com/store/apps/details?id=com.linecorp.LGTMTM&hl=ja&gl=jp",
        "itunes_url": "",
        "country": "jp",
        "release_at": "2016-08-18 12:33:53",
        "date_modified": 1472118762,
        "date_published": 1472118762,
        "status": "online"
      };
      sinon.stub(WpService, 'backendSync', (req) => {
        return data;
      });
      done();
    });

    after((done) => {
      WpService.backendSync.restore();
      done();
    });

    it('get /api/wp/webhook/posts/:wpId', async(done) => {
      request(sails.hooks.http.app).get('/api/wp/webhook/posts/22')
        .end(
          (err, res) => {
            let result = res.body;
            res.statusCode.should.be.equal(200);
            done();
          });
    });
  });

  describe('syncPost offline', function() {

    before(async(done) => {
      let data = {
        "post_id": 22,
        "post_type": "article",
        "title": "よめいく恋愛SLG「虹色カノジョ２d」",
        "icon": "//lh3.googleusercontent.com/G-m6v3udV343f9IAralUSX0OA-IX1OVSwGtk6w-6ZzgzekW0Y6GBiJ6E-pI-V16pvCYe=w300",
        "cover": "//lh3.googleusercontent.com/G-m6v3udV343f9IAralUSX0OA-IX1OVSwGtk6w-6ZzgzekW0Y6GBiJ6E-pI-V16pvCYe=w300",
        "content": "<p>株式会社エイチーム(本社：愛知県名古屋市、代表取締役社長：林高生、以下エイチーム)は、世界(※一部の国を除く)のiOS/Android（TM）向けに配信し、累計500万ダウンロードを突破した新感覚リアルタイムRPG",
        "google_play_url": "https://play.google.com/store/apps/details?id=com.linecorp.LGTMTM&hl=ja&gl=jp",
        "itunes_url": "",
        "country": "jp",
        "release_at": "2016-08-18 12:33:53",
        "date_modified": 1472118762,
        "date_published": 1472118762,
        "status": "offline"
      };
      sinon.stub(WpService, 'backendSync', (req) => {
        return data;
      });
      done();
    });

    after((done) => {
      WpService.backendSync.restore();
      done();
    });

    it('get /api/wp/webhook/posts/:wpId', async(done) => {
      request(sails.hooks.http.app).get('/api/wp/webhook/posts/22')
        .end(
          (err, res) => {
            let result = res.body;
            res.statusCode.should.be.equal(200);
            done();
          });
    });
  });

  describe('syncVideo online', function() {
    before(async(done) => {
      let data = {
        "post_id": 44,
        "post_type": "video",
        "title": "Pika Pikachu!",
        "video_url": "https://www.youtube.com/watch?v=0JEk4eFsEKw",
        "country": "jp",
        "release_at": "2016-08-18 12:33:53",
        "date_modified": 1472174733,
        "date_published": 1472174733,
        "status": "online"
      };

      sinon.stub(WpService, 'backendSync', (req) => {
        return data;
      });
      done();
    });

    after((done) => {
      WpService.backendSync.restore();
      done();
    });


    it('get /api/wp/webhook/videos/:wpId', async(done) => {
      request(sails.hooks.http.app).get('/api/wp/webhook/videos/44')
        .end(
          (err, res) => {
            let result = res.body;
            res.statusCode.should.be.equal(200);
            done();
          });
    });
  });

  describe('syncVideo offline', function() {
    before(async(done) => {
      let data = {
        "post_id": 44,
        "post_type": "video",
        "title": "Pika Pikachu!",
        "video_url": "https://www.youtube.com/watch?v=0JEk4eFsEKw",
        "country": "jp",
        "release_at": "2016-08-18 12:33:53",
        "date_modified": 1472174733,
        "date_published": 1472174733,
        "status": "offline"
      };

      sinon.stub(WpService, 'backendSync', (req) => {
        return data;
      });
      done();
    });

    after((done) => {
      WpService.backendSync.restore();
      done();
    });


    it('get /api/wp/webhook/videos/:wpId', async(done) => {
      request(sails.hooks.http.app).get('/api/wp/webhook/videos/44')
        .end(
          (err, res) => {
            let result = res.body;
            res.statusCode.should.be.equal(200);
            done();
          });
    });
  });

  describe('syncPreregistration online', function() {

    before(async() => {

      let data = {
        "post_id": 164,
        "post_type": "prereg",
        "icon": "http://52.198.97.215/wp-content/uploads/2016/09/2014-01-01_1832-1.png",
        "title": "pre-reigster 090901",
        "description": "<p>pre-reigster 0909011111</p>\n<p>pre-reigster 090901</p>\n<p>pre-reigster 090901</p>\n<p>pre-reigster 090901</p>\n",
        "cover": "http://52.198.97.215/wp-content/uploads/2016/09/16407404782_1be42bc8f8_o-1.png",
        "country": "jp",
        "developer": "Rayark",
        "release_at": "2016-09-09 08:34:55",
        "start_date": "2016-09-07 00:00:00",
        "end_date": "2016-09-12 00:00:00",
        "date_modified": 1473410427,
        "date_published": 1473410095,
        "PreregistrationPlatforms": [{
          'platform': 1,
          'quota': 1000,
          'free': true,
          "post_id": 164,
        }],
        "status": "online"
      };

      sinon.stub(WpService, 'backendSync', (req) => {
        return data;
      });
    });

    after((done) => {
      WpService.backendSync.restore();
      done();
    });

    it('get /api/wp/webhook/preregistrations/:wpId', async(done) => {
      request(sails.hooks.http.app).get(
        '/api/wp/webhook/preregistrations/226').end(
        (err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          done();
        });
    });
  });

  describe('syncPreregistration offline', function() {

    before(async() => {

      let data = {
        "post_id": 164,
        "post_type": "prereg",
        "icon": "http://52.198.97.215/wp-content/uploads/2016/09/2014-01-01_1832-1.png",
        "title": "pre-reigster 090901",
        "description": "<p>pre-reigster 0909011111</p>\n<p>pre-reigster 090901</p>\n<p>pre-reigster 090901</p>\n<p>pre-reigster 090901</p>\n",
        "cover": "http://52.198.97.215/wp-content/uploads/2016/09/16407404782_1be42bc8f8_o-1.png",
        "country": "jp",
        "developer": "Rayark",
        "release_at": "2016-09-09 08:34:55",
        "start_date": "2016-09-07 00:00:00",
        "end_date": "2016-09-12 00:00:00",
        "date_modified": 1473410427,
        "date_published": 1473410095,
        "PreregistrationPlatforms": [{
          'platform': 1,
          'quota': 1000,
          'free': true,
          "post_id": 164,
        }],
        "status": "offline"
      };

      sinon.stub(WpService, 'backendSync', (req) => {
        return data;
      });
    });

    after((done) => {
      WpService.backendSync.restore();
      done();
    });

    it('get /api/wp/webhook/preregistrations/:wpId', async(done) => {
      request(sails.hooks.http.app).get(
        '/api/wp/webhook/preregistrations/226').end(
        (err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          done();
        });
    });
  });

  describe('syncAdplays', function() {

    before(async(done) => {
      let data = {
        "results": [{
          "post_id": 47,
          "post_type": "adplay",
          "ad_id": "com.rayark.implosion",
          "title": "インプロージョン",
          "cover": "//lh3.googleusercontent.com/zp4zs_ipZ8JCr0L_vFlv480MVHW9vpl3IGMaTFHRDLRosPjg1LavMGqXb3lZGyx2Eg=w300",
          "icon": "//lh3.googleusercontent.com/zp4zs_ipZ8JCr0L_vFlv480MVHW9vpl3IGMaTFHRDLRosPjg1LavMGqXb3lZGyx2Eg=w300",
          "country": "jp",
          "google_play_url": "https://play.google.com/store/apps/details?id=com.zeptolab.ctr.ads&hl=ja&gl=jp"
        }]
      };

      sinon.stub(WpService, 'fetchLatestPosts', (req) => {
        return data;
      });
      done();
    });

    after((done) => {
      WpService.fetchLatestPosts.restore();
      done();
    });

    it('get /api/wp/webhook/adplays', async(done) => {
      request(sails.hooks.http.app).get('/api/wp/webhook/adplays').end(
        (err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          done();
        });
    });
  });

  describe('syncPosts', function() {
    before(async() => {

      let data = {
        "results": [{
          "post_id": 22,
          "post_type": "article",
          "title": "よめいく恋愛SLG「虹色カノジョ２d」",
          "icon": "//lh3.googleusercontent.com/G-m6v3udV343f9IAralUSX0OA-IX1OVSwGtk6w-6ZzgzekW0Y6GBiJ6E-pI-V16pvCYe=w300",
          "cover": "//lh3.googleusercontent.com/G-m6v3udV343f9IAralUSX0OA-IX1OVSwGtk6w-6ZzgzekW0Y6GBiJ6E-pI-V16pvCYe=w300",
          "content": "<p>株式会社エイチーム(本社：愛知県名古屋市、代表取締役社長：林高生、以下エイチーム)は、世界(※一部の国を除く)のiOS/Android（TM）向けに配信し、累計500万ダウンロードを突破した新感覚リアルタイムRPG",
          "google_play_url": "https://play.google.com/store/apps/details?id=com.linecorp.LGTMTM&hl=ja&gl=jp",
          "itunes_url": "",
          "country": "jp",
          "release_at": "2016-08-18 12:33:53",
          "date_modified": 1472118762,
          "date_published": 1472118762
        }]
      };

      sinon.stub(WpService, 'fetchLatestPosts', (req) => {
        return data;
      });
    });

    after((done) => {
      WpService.fetchLatestPosts.restore();
      done();
    });

    it('get /api/wp/webhook/posts', async(done) => {
      request(sails.hooks.http.app).get('/api/wp/webhook/posts').end(
        (err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          done();
        });
    });

  });

  describe('syncVideos', function() {

    before(async(done) => {
      let data = {
        "results": [{
          "post_id": 44,
          "post_type": "video",
          "title": "Pika Pikachu!",
          "video_url": "https://www.youtube.com/watch?v=0JEk4eFsEKw",
          "country": "jp",
          "release_at": "2016-08-18 12:33:53",
          "date_modified": 1472174733,
          "date_published": 1472174733
        }]
      };

      sinon.stub(WpService, 'fetchLatestPosts', (req) => {
        return data;
      });
      done();
    });

    after((done) => {
      WpService.fetchLatestPosts.restore();
      done();
    });

    it('get /api/wp/webhook/videos', async(done) => {
      request(sails.hooks.http.app).get('/api/wp/webhook/videos').end(
        (err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          done();
        });
    });
  });

  describe('syncPreregistrations', function() {
    before(async() => {

      let data = {
        "results": [{
          "post_id": 164,
          "post_type": "prereg",
          "icon": "http://52.198.97.215/wp-content/uploads/2016/09/2014-01-01_1832-1.png",
          "title": "pre-reigster 090901",
          "description": "<p>pre-reigster 0909011111</p>\n<p>pre-reigster 090901</p>\n<p>pre-reigster 090901</p>\n<p>pre-reigster 090901</p>\n",
          "cover": "http://52.198.97.215/wp-content/uploads/2016/09/16407404782_1be42bc8f8_o-1.png",
          "country": "jp",
          "developer": "Rayark",
          "release_at": "2016-09-09 08:34:55",
          "start_date": "2016-09-07 00:00:00",
          "end_date": "2016-09-12 00:00:00",
          "date_modified": 1473410427,
          "date_published": 1473410095,
          "PreregistrationPlatforms": [{
            'platform': 1,
            'quota': 1000,
            'free': true,
          }]
        }, {
          "post_id": 150,
          "post_type": "prereg",
          "icon": "http://52.198.97.215/wp-content/uploads/2016/09/single_128x128-1-2.png",
          "title": "Hello Prereg webhook",
          "description": "<p>123</p>\n",
          "cover": "http://52.198.97.215/wp-content/uploads/2016/09/single_128x128-1-2.png",
          "country": "jp",
          "developer": "Rayark",
          "release_at": "2016-09-09 06:22:31",
          "start_date": "2016-09-16 00:00:00",
          "end_date": "2016-09-23 00:00:00",
          "date_modified": 1473402151,
          "date_published": 1473402151,
          "PreregistrationPlatforms": [{
            'platform': 1,
            'quota': 1000,
            'free': true,
          }]
        }, {
          "post_id": 138,
          "post_type": "prereg",
          "icon": "http://52.198.97.215/wp-content/uploads/2016/09/single_128x128-1-1.png",
          "title": "Test prereg",
          "description": "<p>123</p>\n",
          "cover": "http://52.198.97.215/wp-content/uploads/2016/09/single_128x128-1-1.png",
          "country": "jp",
          "developer": "Rayark",
          "release_at": "2016-09-09 05:19:17",
          "start_date": "2016-09-23 00:00:00",
          "end_date": "2016-09-30 00:00:00",
          "date_modified": 1473399674,
          "date_published": 1473398357,
          "PreregistrationPlatforms": [{
            'platform': 0,
            'quota': 1000,
            'free': true,
          }, {
            'platform': 0,
            'quota': 1000,
            'free': true,
          }]
        }]
      };

      sinon.stub(WpService, 'fetchLatestPosts', (req) => {
        return data;
      });
    });

    after((done) => {
      WpService.fetchLatestPosts.restore();
      done();
    });

    it('get /api/wp/webhook/preregistrations', async(done) => {
      request(sails.hooks.http.app).get(
        '/api/wp/webhook/preregistrations').end(
        (err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          done();
        });
    });

  });

  describe('syncAdvertisements', function() {

    before(async() => {
      let data = [];

      sinon.stub(WpService, 'fetchAdvertisements', (req) => {
        return data;
      });
    });

    after((done) => {
      WpService.fetchAdvertisements.restore();
      done();
    });

    it('get /api/wp/webhook/advertisements', async(done) => {
      request(sails.hooks.http.app).get(
        '/api/wp/webhook/advertisements').end(
        (err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          done();
        });
    });
  });
});
