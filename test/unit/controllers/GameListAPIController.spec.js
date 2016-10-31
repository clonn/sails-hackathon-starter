import {
  GameFields, GameListFields, GameListFieldsAndGameListItems,
  GameListItemFieldsAndGame, GameListFieldsAndGameListItemsAndisMeLike
}
from '../field';

describe('GameListAPIController', () => {

  it('# get /api/gamelists/1', function(done) {

    request(sails.hooks.http.app)
      .get('/api/gamelists/1')
      .end((err, res) => {
        let gamelist = res.body;
        res.statusCode.should.be.equal(200);
        gamelist.should.be.Object;
        gamelist.should.have.keys(
          GameListFieldsAndGameListItemsAndisMeLike);
        gamelist.GameListItems.should.be.Arrays;
        let gameListItem = gamelist.GameListItems[0];
        gameListItem.should.have.keys(GameListItemFieldsAndGame);
        gameListItem.Game.should.have.keys(GameFields);

        done(err);
      });
  })

  describe('# post /api/gamelists', () => {

    before(async() => {
      let user = await User.find();
      sinon.stub(UserService, 'getLoginUser', (req) => {
        return user;
      });
    });

    after((done) => {
      UserService.getLoginUser.restore();
      done();
    });

    it('# create case 1', function(done) {

      let data = {
        title: 'fake test tile from controller',
        description: 'description 1',
        GameListItems: [{
          GameId: 22,
          description: 'case 1 description 1'
        }, {
          GameId: 23,
          description: 'case 1 description 2'
        }, {
          GameId: 24,
          description: 'case 1 description 3'
        }]
      }

      request(sails.hooks.http.app)
        .post('/api/gamelists')
        .send(data)
        .end((err, res) => {
          let gamelist = res.body;
          res.statusCode.should.be.equal(200);
          gamelist.should.be.Arrays;
          gamelist.should.have.keys(
            GameListFieldsAndGameListItemsAndisMeLike);
          gamelist.GameListItems.should.be.Arrays;
          gamelist.GameListItems.length.should.be.equal(3);
          gamelist.GameListItems[0].should.have.keys(
            GameListItemFieldsAndGame);
          gamelist.GameListItems[1].should.have.keys(
            GameListItemFieldsAndGame);
          gamelist.GameListItems[2].should.have.keys(
            GameListItemFieldsAndGame);
          done(err);
        });
    })

    it('# create case 2', function(done) {

      let data = {
        title: 'fake test tile from controller',
        description: 'description 1',
        GameListItems: [{
          GameId: 22,
          description: 'case 1 description 1'
        }, {
          GameId: 22,
          description: 'case 1 description 2'
        }, {
          GameId: 24,
          description: 'case 1 description 3'
        }]
      }

      request(sails.hooks.http.app)
        .post('/api/gamelists')
        .send(data)
        .end((err, res) => {
          let gamelist = res.body;
          res.statusCode.should.be.equal(400);
          done();
        });
    })

    it('# create case 3', function(done) {

      let data = {
        title: 'fake test tile from controller 2',
        description: 'description 2',
        GameListItems: [{
          appId: 'tw.com.iwplay.sd',
          description: 'case 2 description 1'
        }, {
          appId: 'comxo.nisimabcde.owner.nissim1',
          description: 'case 2 description 2'
        }, {
          appId: 'air.A1234Toddler',
          description: 'case 2 description 3'
        }]
      }

      request(sails.hooks.http.app)
        .post('/api/gamelists')
        .send(data)
        .end((err, res) => {
          let gamelist = res.body;
          res.statusCode.should.be.equal(200);
          gamelist.should.be.Arrays;
          gamelist.should.have.keys(
            GameListFieldsAndGameListItemsAndisMeLike);
          gamelist.GameListItems.should.be.Arrays;
          gamelist.GameListItems.length.should.be.equal(3);
          gamelist.GameListItems[0].should.have.keys(
            GameListItemFieldsAndGame);
          gamelist.GameListItems[1].should.have.keys(
            GameListItemFieldsAndGame);
          gamelist.GameListItems[2].should.have.keys(
            GameListItemFieldsAndGame);
          done(err);
        });
    })

    it('# create case 4', function(done) {

      let data = {
        title: 'fake test tile from controller 2',
        description: 'description 2'
      }

      request(sails.hooks.http.app)
        .post('/api/gamelists')
        .send(data)
        .end((err, res) => {
          let gamelist = res.body;
          res.statusCode.should.be.equal(400);
          done(err);
        });
    })
  });

  describe('# delete', () => {
    before(async() => {
      let user = await User.find();
      sinon.stub(UserService, 'getLoginUser', (req) => {
        return user;
      });

      sinon.stub(GameListService, 'destroy', (req) => {
        return true;
      });

      sinon.stub(GameListService, 'destroys', (req) => {
        return true;
      });

    });

    after((done) => {
      UserService.getLoginUser.restore();
      GameListService.destroy.restore();
      GameListService.destroys.restore();
      done();
    });

    it('# delete /api/gamelists/:gamelistId', function(done) {

      request(sails.hooks.http.app)
        .delete('/api/gamelists/3')
        .end((err, res) => {
          let gamelist = res.body;
          res.statusCode.should.be.equal(200);
          done(err);
        });
    })

    it('# delete /api/gamelists', function(done) {
      let data = {
        GameListItems: [{
          id: 4
        }, {
          id: 5
        }]
      }

      request(sails.hooks.http.app)
        .delete('/api/gamelists')
        .send(data)
        .end((err, res) => {
          let gamelist = res.body;
          res.statusCode.should.be.equal(200);
          done(err);
        });
    })
  });

  describe('# update', () => {
    let gamelist;

    before(async() => {

      let user = await User.findOne();
      sinon.stub(UserService, 'getLoginUser', (req) => {
        return user;
      });

      let gamelists = await GameList.findAll({
        where: {
          UserId: user.id
        },
        include: [GameListItem],
      });
      gamelist = gamelists[1].dataValues;
    });

    after((done) => {
      UserService.getLoginUser.restore();
      done();
    });

    it('# patch /api/gamelists/2', function(done) {
      let data = {
        id: gamelist.id,
        title: 'patch title',
        description: 'patch description',
        GameListItems: [{
          appId: 'comxo.nisimabcde.owner.nissim1',
          description: 'patch description 1'
        }, {
          GameId: 23,
          description: 'patch description 2'
        }, {
          GameId: 24,
          description: 'patch description 3'
        }, {
          id: gamelist.GameListItems[0].dataValues.id,
          description: 'patch old gamelistitem'
        }]
      };

      request(sails.hooks.http.app)
        .patch('/api/gamelists/2')
        .send(data)
        .end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          result.title.should.equal(data.title);
          result.should.have.keys(
            GameListFieldsAndGameListItemsAndisMeLike);
          result.GameListItems.should.be.Arrays;
          result.GameListItems.length.should.be.equal(4);
          done(err);
        });
    })
  });

});
