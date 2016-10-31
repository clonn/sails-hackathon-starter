var validator = require('validator');
var crypto    = require('crypto');

/**
 * Local Authentication Protocol
 *
 * The most widely used way for websites to authenticate users is via a username
 * and/or email as well as a password. This module provides functions both for
 * registering entirely new users, assigning passwords to already registered
 * users and validating login requesting.
 *
 * For more information on local authentication in Passport.js, check out:
 * http://passportjs.org/guide/username-password/
 */

/**
 * Register a new user
 *
 * This method creates a new user from a specified email, username and password
 * and assign the newly created user a local Passport.
 *
 * @param {Object}   req
 * @param {Object}   res
 * @param {Function} next
 */
exports.register = async function (req, res, next) {
  var email    = req.param('email')
    , username = req.param('username')
    , password = req.param('password')
    , nickname = req.param('nickname');

  let userNew = {};

  if (!email) {
    req.flash('error', 'Error.Passport.Email.Missing');
    return next(new Error('No email was entered.'));
  }

  if (!username) {
    req.flash('error', 'Error.Passport.Username.Missing');
    return next(new Error('No username was entered.'));
  }

  if (!password) {
    req.flash('error', 'Error.Passport.Password.Missing');
    return next(new Error('No password was entered.'));
  }

  userNew.email = email;
  userNew.username = username;
  userNew.nickname = nickname;

  let user, passport;
  try {
    user = await User.create(userNew);

    let token = crypto.randomBytes(48).toString('base64');
    passport = await Passport.create({
      protocol    : 'local'
    , password    : password
    , UserId        : user.id
    , accessToken : token
    });

    await passport.setUser(user);
    return next(null, user);

  } catch (err) {
    console.error(err);

    if (user) {
      await user.destory();
    }

    if (err.invalidAttributes.email) {
      req.flash('error', 'Error.Passport.Email.Exists');
    } else {
      req.flash('error', 'Error.Passport.User.Exists');
    }

    return next(err);

  }
};

/**
 * Assign local Passport to user
 *
 * This function can be used to assign a local Passport to a user who doens't
 * have one already. This would be the case if the user registered using a
 * third-party service and therefore never set a password.
 *
 * @param {Object}   req
 * @param {Object}   res
 * @param {Function} next
 */
exports.connect = function (req, res, next) {
  var user     = req.user
    , password = req.param('password');

  Passport.find({
    protocol : 'local'
  , UserId     : user.id
  }, function (err, passport) {
    if (err) {
      return next(err);
    }

    if (!passport) {
      Passport.create({
        protocol : 'local'
      , password : password
      , UserId     : user.id
      }, function (err, passport) {
        next(err, user);
      });
    }
    else {
      next(null, user);
    }
  });
};

/**
 * Validate a login request
 *
 * Looks up a user using the supplied identifier (email or username) and then
 * attempts to find a local Passport associated with the user. If a Passport is
 * found, its password is checked against the password supplied in the form.
 *
 * @param {Object}   req
 * @param {string}   identifier
 * @param {string}   password
 * @param {Function} next
 */
exports.login = async function (req, identifier, password, next) {
  var isEmail = validator.isEmail(identifier)
    , query   = {};

  if (isEmail) {
    query.email = identifier;
  }
  else {
    query.username = identifier;
  }

  try {
    let user = await User.find(query);
    let passport = await Passport.find({
      protocol : 'local',
      password : password, 
      UserId   : user.id
    });

    console.log({
      protocol : 'local',
      UserId   : user.id
    });

    if (passport) {
      return next(null, user);
    } else {
      req.flash('error', 'Error.Passport.Password.Wrong');
      return next(null, false);
    }

  } catch (err) {
    console.error(err);

    // if (!user) {
    //   if (isEmail) {
    //     req.flash('error', 'Error.Passport.Email.NotFound');
    //   } else {
    //     req.flash('error', 'Error.Passport.Username.NotFound');
    //   }

    //   return next(null, false);
    // }

    // return next(err);
    return next(null, false);
  }
};
