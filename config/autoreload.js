module.exports['autoreload-extend'] = {
  active: true,
  usePolling: false,
  dirs: [
    "api/models",
    "api/controllers",
    "api/services",
    "config/locales"
  ],
  ignored: [
    // Ignore all files with .ts extension
    "**.ts"
  ],
  extend: function () {
    // Reload services
    if (sails.hooks.sequelize) {
      console.log('auto reload sequelize');
      sails.hooks.sequelize.loadModules(function() {});
    }
  }
};