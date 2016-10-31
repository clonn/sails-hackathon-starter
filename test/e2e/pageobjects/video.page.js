import page from './page';

let AdplayPage = Object.create(page, {

  content: {
    get: () => {
      return {
        barTitle: '動画',
        url: '#!/video/list/1'
      };
    }
  },

  /* define elements */
  barTitle: {
    get: function() {
      return browser.element('.list-section-bar span');
    }
  },

  /* define or overwrite page methods */
  open: {
    value: function() {
      page.open.call(this, '#!/video/list/1');
    }
  }
});

module.exports = AdplayPage;
