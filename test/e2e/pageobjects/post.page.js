import page from './page';

let PostPage = Object.create(page, {

  content: {
    get: () => {
      return {
        barTitle: 'ニュース',
        url: '/#!/post/list/1'
      };
    }
  },

  /* define elements */
  barTitle: {
    get: function() {
      return browser.element('.list-section-bar span');
    }
  },

  postDetail: {
    value: function() {
      browser.click('.page[data-page="post_list"] li.brief-news a');
    }
  },
  postDetailBarTitle: {
    get: function() {
      return browser.element('.back-title');
    }
  },

  /* define or overwrite page methods */
  open: {
    value: function() {
      page.open.call(this, '/#!/post/list/1');
    }
  }
});

module.exports = PostPage;
