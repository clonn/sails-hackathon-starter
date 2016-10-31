describe.skip('GooglePlayService', () => {

  let fields = [
    "adSupported",
    "appId",
    "comments",
    "contentRating",
    "description",
    "descriptionHTML",
    "developer",
    "developerEmail",
    "developerWebsite",
    "familyGenre",
    "familyGenreId",
    "free",
    "genre",
    "genreId",
    "histogram",
    "icon",
    "maxInstalls",
    "minInstalls",
    "offersIAP",
    "price",
    "requiredAndroidVersion",
    "reviews",
    "score",
    "screenshots",
    "size",
    "title",
    "updated",
    "url",
    "version",
    "video"
  ];

  it('get list', async(done) => {
    try {
      let apps = await GooglePlayService.getList();
      apps.should.be.Arrays;
      apps[0].should.have.keys(fields);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('get app detail', async(done) => {
    try {
      let app = await GooglePlayService.getAppDetail(
        'com.netmarble.sknightsgb');
      app.should.be.Object;
      app.should.have.keys(fields);
      done();
    } catch (e) {
      done(e);
    }
  });

});
