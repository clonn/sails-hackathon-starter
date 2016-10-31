describe('Advertisement', function() {
  it.skip('sava', async(done) => {
    try {
      const data = [{
        "page": 0,
        "position": 0,
        "sequenceId": 1,
        "type": 0,
        "wpId": 223,
        "created_at": "2016-09-14 09:10:41",
        "updated_at": "2016-09-14 09:10:42",
        "AdplayId": 3,
        "PostId": null,
        "VideoId": null,
        "preregistrationId": null
      }, {
        "page": 0,
        "position": 2,
        "sequenceId": 1,
        "type": 0,
        "wpId": 223,
        "created_at": "2016-09-14 09:10:41",
        "updated_at": "2016-09-14 09:10:42",
        "AdplayId": 3,
        "PostId": null,
        "VideoId": null,
        "preregistrationId": null
      }, {
        "page": 0,
        "position": 3,
        "sequenceId": 2,
        "type": 2,
        "wpId": 167,
        "created_at": "2016-09-14 09:10:41",
        "updated_at": "2016-09-14 09:10:41",
        "AdplayId": null,
        "PostId": null,
        "VideoId": 1,
        "preregistrationId": null
      }, {
        "page": 0,
        "position": 3,
        "sequenceId": 1,
        "type": 2,
        "wpId": 148,
        "created_at": "2016-09-14 09:10:41",
        "updated_at": "2016-09-14 09:10:41",
        "AdplayId": null,
        "PostId": null,
        "VideoId": 2,
        "preregistrationId": null
      }, {
        "page": 0,
        "position": 1,
        "sequenceId": 5,
        "type": 3,
        "wpId": 228,
        "created_at": "2016-09-14 09:10:42",
        "updated_at": "2016-09-14 09:10:42",
        "AdplayId": null,
        "PostId": null,
        "VideoId": null,
        "preregistrationId": 4
      }, {
        "page": 0,
        "position": 1,
        "sequenceId": 4,
        "type": 1,
        "wpId": 153,
        "created_at": "2016-09-14 09:10:42",
        "updated_at": "2016-09-14 09:10:42",
        "AdplayId": null,
        "PostId": 1,
        "VideoId": null,
        "preregistrationId": null
      }, {
        "page": 0,
        "position": 1,
        "sequenceId": 3,
        "type": 1,
        "wpId": 144,
        "created_at": "2016-09-14 09:10:42",
        "updated_at": "2016-09-14 09:10:42",
        "AdplayId": null,
        "PostId": 2,
        "VideoId": null,
        "preregistrationId": null
      }, {
        "page": 0,
        "position": 1,
        "sequenceId": 2,
        "type": 3,
        "wpId": 226,
        "created_at": "2016-09-14 09:10:43",
        "updated_at": "2016-09-14 09:10:43",
        "AdplayId": null,
        "PostId": null,
        "VideoId": null,
        "preregistrationId": 5
      }, {
        "page": 0,
        "position": 1,
        "sequenceId": 1,
        "type": 1,
        "wpId": 140,
        "created_at": "2016-09-14 09:10:43",
        "updated_at": "2016-09-14 09:10:43",
        "AdplayId": null,
        "PostId": 3,
        "VideoId": null,
        "preregistrationId": null
      }];

      await Advertisement.bulkCreate(data);

      done();
    } catch (e) {
      done(e);
    }
  });
});
