import {
  GameFields, GameFieldsAndGameListItem, GameListFieldsAndGameListItems,
  GameListFields, GameListFieldsAndGameListItemsAndisMeLike,
  GameListFieldsAndGameListItemsAndisMeLikeAndGameListId,
  GameListFieldsAndGameListItemsAndisMeLikeAndGameListIdAndGameId,
  GameListItemFieldsAndGame
}
from '../field';

describe('GameListService', () => {

  describe('owner', () => {
    let user;
    before(async() => {
      user = await User.findOne();
    });

    it('I am', async(done) => {
      try {
        let result = await GameListService.owner(user, 1);
        result.should.be.equal(true);
        done()
      } catch (e) {
        done(e);
      }
    });

    it('I am not.', async(done) => {
      try {
        let result = await GameListService.owner(user, 6);
        result.should.be.equal(false);
        done()
      } catch (e) {
        done(e);
      }
    });
  });


  it('create', async(done) => {
    try {

      let data = {
        UserId: 1,
        title: 'fake test tile',
        GameListItems: [{
          GameId: 11,
          description: 'description 1'
        }, {
          GameId: 12,
          description: 'description 2'
        }, {
          GameId: 13,
          description: 'description 3'
        }]
      };


      let gamelist = await GameListService.create(data);
      gamelist.should.be.Object;
      gamelist = gamelist.dataValues;
      gamelist.should.have.keys(
        GameListFieldsAndGameListItemsAndisMeLikeAndGameListId
      );
      gamelist.GameListItems.should.be.Arrays;
      gamelist.GameListItems[0].dataValues.should.have.keys(
        GameListItemFieldsAndGame);

      done();
    } catch (e) {
      done(e);
    }
  });

  it('getGameListsAndViewCount', async(done) => {
    let limit = 5;
    let country = 'jp';
    try {
      let gamelists = await GameListService.getGameListsAndViewCount(
        country, limit, false);
      gamelists.should.be.Arrays;
      let gamelist = gamelists[0].dataValues;
      let keys = _.concat(GameListFieldsAndGameListItemsAndisMeLike,
        'viewCount');
      gamelist.should.have.keys(keys);
      done();
    } catch (e) {
      done(e);
    }
  });

  describe('getGameLists', function() {
    let limit = 5;
    let country = 'jp';

    it('no login', async(done) => {
      try {
        let gamelists = await GameListService.getGameLists(country,
          limit, null, false);
        gamelists.should.be.Arrays;
        let gamelist = gamelists[0].toJSON();
        gamelist.should.have.keys(
          GameListFieldsAndGameListItemsAndisMeLike);
        done();
      } catch (e) {
        done(e);
      }
    });

    it('logined', async(done) => {
      try {
        let loginUser = await User.findOne();
        let gamelists = await GameListService.getGameLists(country,
          limit, loginUser, false);
        gamelists.should.be.Arrays;
        let gamelist = gamelists[0].toJSON();
        gamelist.should.have.keys(
          GameListFieldsAndGameListItemsAndisMeLike);
        done();
      } catch (e) {
        done(e);
      }
    });

    it.skip('logined and userlike', async(done) => {
      try {
        const loginUser = await User.findById(2);
        const gamelists = await GameListService.getGameLists(
          country, limit, loginUser, true);
        gamelists.should.be.Arrays;
        gamelists.length.should.be.equal(1);
        let gamelist = gamelists[0].toJSON();
        gamelist.should.have.keys(
          GameListFieldsAndGameListItemsAndisMeLike);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  it('addIsMeLikes', async(done) => {
    try {
      let oldGamelists = [{
        dataValues: {
          id: 1,
          like: 2,
          UserLike: [{
            dataValues: {
              id: 1,
            },
          }, {
            dataValues: {
              id: 2,
            }
          }]
        },
      }, {
        dataValues: {
          id: 2,
          like: 0,
          UserLike: []
        }
      }];

      let gamelists = await GameListService.addIsMeLikes(
        oldGamelists);
      gamelists.should.be.Arrays;
      let gamelist = gamelists[0].dataValues;
      gamelist.should.have.keys(['id', 'like', 'UserLike',
        'isMeLike'
      ]);
      gamelist.isMeLike.should.be.equal(false);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('addIsMeLikesByUser', async(done) => {
    try {
      let oldGamelists = [{
        dataValues: {
          id: 1,
          like: 2,
          UserLike: [{
            dataValues: {
              id: 1,
            },
          }, {
            dataValues: {
              id: 2,
            }
          }]
        },
      }, {
        dataValues: {
          id: 2,
          like: 0,
          UserLike: []
        }
      }];

      let gamelists = await GameListService.addIsMeLikesByUser(
        oldGamelists, 1);
      gamelists.should.be.Arrays;
      let gamelist = gamelists[0].dataValues;
      gamelist.should.have.keys(['id', 'like', 'UserLike',
        'isMeLike'
      ]);
      gamelist.isMeLike.should.be.equal(true);
      done();
    } catch (e) {
      done(e);
    }
  });

  describe('getGameList', function() {
    it('no login', async(done) => {
      try {
        let gamelist = await GameListService.getGameList(1);
        gamelist = gamelist.dataValues;
        gamelist.should.be.Object;
        gamelist.should.have.keys(
          GameListFieldsAndGameListItemsAndisMeLikeAndGameListId);
        gamelist.GameListItems.should.be.Arrays;
        gamelist.GameListItems[0].dataValues.should.have.keys(
          GameListItemFieldsAndGame);
        done();
      } catch (e) {
        done(e);
      }
    });

    it('logined', async(done) => {
      try {
        let loginUser = await User.findOne();
        let gamelist = await GameListService.getGameList(1,
          loginUser);
        gamelist = gamelist.dataValues;
        gamelist.should.be.Object;
        gamelist.should.have.keys(
          GameListFieldsAndGameListItemsAndisMeLikeAndGameListId
        );
        gamelist.GameListItems.should.be.Arrays;
        gamelist.GameListItems[0].dataValues.should.have.keys(
          GameListItemFieldsAndGame);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  it('getGameListsByUserAndViewCount', async(done) => {
    // TODO: check it again, later
    try {
      let loginUser = await User.findOne();
      let gamelists = await GameListService.getGameListsByUserAndViewCount(
        1, loginUser);
      gamelists.should.be.Arrays;
      let gamelist = gamelists[0].toJSON();
      let keys = _.concat(GameListFieldsAndGameListItemsAndisMeLike,
        'viewCount');
      gamelist.should.have.keys(keys);
      done();
    } catch (e) {
      done(e);
    }
  });

  describe('getGameListsByUser', function() {
    it('no login', async(done) => {
      try {
        let gamelists = await GameListService.getGameListsByUser(1);
        gamelists.should.be.Arrays;
        let gamelist = gamelists[0].toJSON();

        gamelist.should.have.keys(
          GameListFieldsAndGameListItemsAndisMeLike);
        done();
      } catch (e) {
        done(e);
      }
    });

    it('logined', async(done) => {
      try {
        let loginUser = await User.findOne();
        let gamelists = await GameListService.getGameListsByUser(1,
          loginUser);
        gamelists.should.be.Arrays;
        let gamelist = gamelists[0].toJSON();
        gamelist.should.have.keys(
          GameListFieldsAndGameListItemsAndisMeLike);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  it('getGameListsByUserFilterGame', async(done) => {
    try {
      let loginUser = await User.findOne();
      let gamelists = await GameListService.getGameListsByUserFilterGame(
        1, loginUser, 1);
      gamelists.should.be.Arrays;
      let gamelist = gamelists[0].toJSON();
      gamelist.should.have.keys(
        GameListFieldsAndGameListItemsAndisMeLike);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('destroy', async(done) => {
    try {
      let result = await GameListService.destroy(3);
      result.should.be.equal(true);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('destroys', async(done) => {
    try {
      let result = await GameListService.destroys([4, 5]);
      result.should.be.equal(true);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('getMylistSize', async(done) => {
    try {
      let user = await User.findOne();
      let result = await GameListService.getMylistSize(user);
      result.should.be.equal(5);
      done();
    } catch (e) {
      done(e);
    }
  });

});
