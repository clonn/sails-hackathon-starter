import page from './page';

let FrontPage = Object.create(page, {

  content: {
    get: () => {
      return {
        title: 'Horidashi'
      };
    }
  },

  /* define elements */
  adplayTab: {
    value: function() {
      browser.click('.tab-adplay');
    }
  },

  videoTab: {
    value: function() {
      browser.click('.tab-video');
    }
  },

  newsMore: {
    value: function() {
      browser.click('.news-read-more a');
    }
  },

  adplayMore: {
    value: function() {
      browser.click('.adplay-play-more a');
    }
  },

  videoMore: {
    value: function() {
      browser.click('.video-watch-more a');
    }
  },

  /* define or overwrite page methods */
  open: {
    value: function() {
      page.open.call(this, '');
    }
  }
});

module.exports = FrontPage;
