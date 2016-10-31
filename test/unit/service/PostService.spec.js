import {
  PostFields
}
from '../field';

const country = 'tw';

describe('PostService', function() {

  describe('Post and Prereg', function() {
    it('getPrePostAndPrereg', async(done) => {
      try {
        const id = 15;
        const type = 'post';
        const result = await PostService.getComboRows(country, 1,
          2000);
        let pre = await PostService.getPrePostAndPrereg(id,
          result.data, type);
        pre.should.be.Object;
        pre.dataValues.should.have.key(PostFields);
        pre.dataValues.id.should.be.equal(14);
        done();
      } catch (e) {
        done(e);
      }
    });

    it('getNextPostAndPrereg', async(done) => {
      try {
        let id = 14;
        let type = 'post';
        const rows = await PostService.getComboRows(country, 1,
          2000);
        let next = await PostService.getNextPostAndPrereg(id,
          rows.data, type);
        next.should.be.Object;
        next.dataValues.should.have.key(PostFields);
        next.dataValues.id.should.be.equal(15);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  it('getPosts', async(done) => {
    try {
      let posts = await PostService.getPosts(country, 20);
      posts.should.be.Arrays;
      posts.length.should.be.equal(15)
      posts[0].dataValues.should.have.key(PostFields);
      posts[0].dataValues.country.should.be.equal(country);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('getPosts with limit', async(done) => {
    try {
      const limit = 5;
      let posts = await PostService.getPosts(country, limit);
      posts.length.should.be.equal(limit)
      posts[0].dataValues.should.have.key(PostFields);
      done();
    } catch (e) {
      done(e);
    }
  });
});
