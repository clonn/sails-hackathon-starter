//  User.js
module.exports = {
  attributes: {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    nickname: {
      type: Sequelize.STRING,
      allowNull: true
    },
    verification: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    photo: {
      type: Sequelize.STRING,
      defaultValue: '/images/user/default-avatar_2x.png'
    }
  },
  associations: function() {
    User.hasMany(Passport);
  },
  options: {
    // tableName: 'users',
    classMethods: {},
    instanceMethods: {},
    hooks: {}
  }
};
