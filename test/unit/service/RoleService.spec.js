import {
  RoleFields
}
from '../field';

describe('RoleService', () => {

  it('getUserRole', async(done) => {
    try {
      let role = await RoleService.getUserRole();
      role.dataValues.should.have.keys(RoleFields);
      done();
    } catch (e) {
      done(e);
    }
  });
});
