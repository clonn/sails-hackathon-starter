import {
  VideoFields
}
from '../field';

describe('VideoService', function() {
  it('getVideos', async(done) => {
    try {
      let videos = await VideoService.getVideos('us');
      videos.should.be.Arrays;
      videos.length.should.be.equal(2);
      videos[0].dataValues.should.have.keys(VideoFields);
      done();
    } catch (e) {
      done(e);
    }
  });

  describe('convertUrlToRefId', function() {

    it('youtube case 1', async(done) => {
      try {
        const url = 'https://www.youtube.com/watch?v=NybSeQz850A';
        const result = await VideoService.convertUrlToRefId(url);
        result.should.equal('NybSeQz850A');
        done();
      } catch (e) {
        done(e);
      }
    });

    it('youtube case 2', async(done) => {
      try {
        const url = 'https://www.youtube.com/embed/NybSeQz850A';
        const result = await VideoService.convertUrlToRefId(url);
        result.should.equal('NybSeQz850A');
        done();
      } catch (e) {
        done(e);
      }
    });

    it('youtube case 3', async(done) => {
      try {
        const url = 'https://youtu.be/NybSeQz850A';
        const result = await VideoService.convertUrlToRefId(url);
        result.should.equal('NybSeQz850A');
        done();
      } catch (e) {
        done(e);
      }
    });

    it('twitch', async(done) => {
      try {
        const url = 'https://www.twitch.tv/riotgames/v/92104821';
        const result = await VideoService.convertUrlToRefId(url);
        expect(result).to.be.not.empty;
        done();
      } catch (e) {
        done(e);
      }
    });

    it('nicovideo', async(done) => {
      try {
        const url = 'http://www.nicovideo.jp/watch/sm2338568';
        const result = await VideoService.convertUrlToRefId(url);
        expect(result).to.be.not.empty;
        done();
      } catch (e) {
        done(e);
      }
    });

  });

  describe('convertUrlToRefType', function() {

    it('youtube case 1', async(done) => {
      try {
        const url = 'https://www.youtube.com/watch?v=NybSeQz850A';
        const result = await VideoService.convertUrlToRefType(url);
        result.should.equal('youtube');
        done();
      } catch (e) {
        done(e);
      }
    });

    it('youtube case 2', async(done) => {
      try {
        const url = 'https://www.youtube.com/embed/NybSeQz850A';
        const result = await VideoService.convertUrlToRefType(url);
        result.should.equal('youtube');
        done();
      } catch (e) {
        done(e);
      }
    });

    it('youtube case 3', async(done) => {
      try {
        const url = 'https://youtu.be/NybSeQz850A';
        const result = await VideoService.convertUrlToRefType(url);
        result.should.equal('youtube');
        done();
      } catch (e) {
        done(e);
      }
    });

    it('twitch', async(done) => {
      try {
        const url = 'https://www.twitch.tv/riotgames/v/92104821';
        const result = await VideoService.convertUrlToRefType(url);
        result.should.equal('twitch');
        done();
      } catch (e) {
        done(e);
      }
    });

    it('nicovideo', async(done) => {
      try {
        const url = 'http://www.nicovideo.jp/watch/sm2338568';
        const result = await VideoService.convertUrlToRefType(url);
        result.should.equal('nicovideo');
        done();
      } catch (e) {
        done(e);
      }
    });

  });
});
