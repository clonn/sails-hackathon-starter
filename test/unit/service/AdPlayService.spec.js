import {
  GameFields, AdplayFields
}
from '../field';

describe('AdplaysService', function() {

  it('getAdplays', async(done) => {
    try {
      let result = await AdplaysService.getAdplays('us');
      result.should.be.Arrays;
      result[0].dataValues.should.have.keys(AdplayFields);
      result.length.should.be.equal(3);
      done();
    } catch (e) {
      done(e);
    }
  });

});
