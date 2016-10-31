import FrontPage from '../pageobjects/front.page';
import PostPage from '../pageobjects/post.page';
import AdplayPage from '../pageobjects/adplay.page';
import VideoPage from '../pageobjects/video.page';

describe('site map', () => {

  it('front page', () => {
    FrontPage.open();
    let title = browser.getTitle();
    title.should.be.equal(FrontPage.content.title);
  });

  it('post page', () => {
    FrontPage.newsMore();
    let barTitle = PostPage.barTitle.getText();
    barTitle.should.be.equal(PostPage.content.barTitle);
  });
  it('postDetail page', () => {
    PostPage.postDetail();
    let barTitle = PostPage.postDetailBarTitle.getText();
    let browserTitle = browser.title().value;
    browserTitle.should.be.equal(barTitle + ' | Horidashi');
  });

  it('adplay page', () => {
    FrontPage.open();
    FrontPage.adplayMore();
    let barTitle = AdplayPage.barTitle.getText();
    barTitle.should.be.equal(AdplayPage.content.barTitle);
  });

  it('video page', () => {
    FrontPage.open();
    FrontPage.videoMore();
    let barTitle = VideoPage.barTitle.getText();
    barTitle.should.be.equal(VideoPage.content.barTitle);
  });


});
