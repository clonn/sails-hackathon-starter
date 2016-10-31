/**
 * Passport.js
 *
 * @description :: Passport for auth integrate
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
import bcrypt from 'bcrypt';

module.exports = {
  attributes: {
    protocol: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING
    },
    accessToken: {
      type: Sequelize.STRING,
    },
    provider: {
      type: Sequelize.STRING
    },
    identifier: {
      type: Sequelize.STRING
    },
    tokens: {
      type: Sequelize.STRING
    }
  },
  associations: function() {
    Passport.belongsTo(User, {});
  },
  options: {
    tableName: 'passports',
    paranoid: true,
    classMethods: {},
    instanceMethods: {
      validatePassword: function(password, next) {
        bcrypt.compare(password, this.password, next);
      },
      hashPassword: function() {
        return bcrypt.hashSync(this.password, 8);
      }
    },
    hooks: {
      beforeCreate: function(passport, next) {
        if (passport.password) {
          passport.password = passport.hashPassword();
        }
      },
      beforeUpdate: function(passport, next) {
        if (passport.newPassword) {
          passport.password = passport.hashPassword();
        }
      },
    },
    // underscored: true
  }
};
