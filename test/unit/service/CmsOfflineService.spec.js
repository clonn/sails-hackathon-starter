describe('CmsOfflineService', () => {

  const data = {
    "results": [{
      "post_id": 44,
      "post_type": "video",
    }, {
      "post_id": 22,
      "post_type": "article",
    }, {
      "post_id": 150,
      "post_type": "prereg",
    }, {
      "post_id": 46,
      "post_type": "adplay",
    }, {
      "post_id": 47,
      "post_type": "adplay",
    }]
  };

  it('lodash', async(done) => {
    let groupbyData = _.groupBy(data.results, 'post_type');
    let adplayIds = _.map(groupbyData.adplay, function(o) {
      return o.post_id;
    })
    adplayIds.should.have.members([46, 47]);
    done();
  });

  describe('offlineAll', () => {
    before(async() => {
      sinon.stub(CmsOfflineService, 'fetchCmsOffline', (req) => {
        return data;
      });
    });

    it('case 1', async(done) => {
      try {
        await CmsOfflineService.offlineAll();
        done();
      } catch (e) {
        done(e);
      }
    });
  });
});
