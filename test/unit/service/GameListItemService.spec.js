import {
  GameFields, GameFieldsAndGameListItem
}
from '../field';


describe('GameListItemService', () => {

  it('addGameListItems', async(done) => {
    try {
      let fields = ['id', 'created_at', 'updated_at', 'GameId',
        'GameListId', 'description'
      ];

      let gameFields = ['id', 'created_at', 'updated_at', 'url',
        'appId',
        'title', 'developer', 'icon', 'score', 'price', 'free',
        'description', 'game_list_item'
      ];

      let gameListItemData = [{
        GameId: 14,
        description: 'fake description 1'
      }, {
        GameId: 15,
        description: 'fake description 2'
      }, {
        GameId: 16,
        description: 'fake description 3'
      }];

      let gamelistItems = await GameListItemService.addGameListItems(
        1, gameListItemData);
      gamelistItems.should.be.Arrays;
      gamelistItems.length.should.be.equal(gameListItemData.length);
      let gamelistItem = gamelistItems[0].dataValues;
      gamelistItem.should.have.keys(fields);
      done();
    } catch (e) {
      done(e);
    }
  });

  describe('keepGamelistItemIds', () => {
    it('case 1', async(done) => {
      let data = [{
        appId: 'comxo.nisimabcde.owner.nissim1',
        description: 'patch description 1'
      }, {
        GameId: 23,
        description: 'patch description 2'
      }, {
        GameId: 24,
        description: 'patch description 3'
      }, {
        id: 1,
        description: 'patch old gamelistitem'
      }];

      try {
        let result = await GameListItemService.keepGamelistItemIds(
          data);
        result.should.be.Arrays;
        result[0].should.be.equal(1);
        done();
      } catch (e) {
        done(e);
      }
    });

    it('case 2', async(done) => {
      let data = [{
        appId: 'comxo.nisimabcde.owner.nissim1',
        description: 'patch description 1'
      }, {
        GameId: 23,
        description: 'patch description 2'
      }, {
        GameId: 24,
        description: 'patch description 3'
      }, {
        GameId: 25,
        description: 'patch old gamelistitem'
      }];

      try {
        let result = await GameListItemService.keepGamelistItemIds(
          data);
        result.should.be.empty;
        done();
      } catch (e) {
        done(e);
      }
    });

    it('case 3', async(done) => {
      let data = [{
        id: 3,
        description: 'patch old gamelistitem'
      }, {
        appId: 'comxo.nisimabcde.owner.nissim1',
        description: 'patch description 1'
      }, {
        GameId: 23,
        description: 'patch description 2'
      }, {
        GameId: 24,
        description: 'patch description 3'
      }];

      try {
        let result = await GameListItemService.keepGamelistItemIds(
          data);
        result.should.be.Arrays;
        result[0].should.be.equal(3);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  describe('isValidGameListItems', function() {
    it('true', async(done) => {
      try {
        let GameListItems = [{
          GameId: 11,
        }, {
          GameId: 12,
        }, {
          GameId: 13,
        }];
        let result = await GameListItemService.isValidGameListItems(
          GameListItems);
        result.should.be.equal(true);
        done();
      } catch (e) {
        done(e);
      }
    });

    it('false', async(done) => {
      try {
        let GameListItems = [{
          GameId: 11,
        }, {
          GameId: 11,
        }, {
          GameId: 13,
        }];
        let result = await GameListItemService.isValidGameListItems(
          GameListItems);
        result.should.be.equal(false);
        done();
      } catch (e) {
        done(e);
      }
    });
  });
});
