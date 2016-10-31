import {
  PostFields, PreregistrationFields
}
from '../field';

describe('AdvertisementService', function() {
  it('getAdvertisements', async(done) => {
    try {
      const data = {
        page: 0,
        position: 1
      }
      let result = await AdvertisementService.getAdvertisements(data.page,
        data.position);
      result.length.should.be.equal(5);
      result[0].Post.dataValues.should.have.keys(PostFields);
      done();
    } catch (e) {
      done(e);
    }
  });

});
