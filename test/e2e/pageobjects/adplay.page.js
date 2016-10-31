import page from './page';

let AdplayPage = Object.create(page, {

  content: {
    get: () => {
      return {
        barTitle: 'お試しプレイ',
        url: '#!/trial/list/1'
      };
    }
  },

  /* define elements */
  barTitle: {
    get: function() {
      return browser.element('.list-section-bar span:nth-child(2)');
    }
  },

  /* define or overwrite page methods */
  open: {
    value: function() {
      page.open.call(this, '#!/trial/list/1');
    }
  }
});

module.exports = AdplayPage;
