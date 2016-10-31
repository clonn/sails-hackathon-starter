import crypto from 'crypto';

module.exports = {
  init: async () => {
    try {
      let userNew = {
        username: 'user',
        email: 'user@user.com',
        nickname: 'user user',
        password: '1234'
      };

      let user = await User.create(userNew);

      let token = crypto.randomBytes(48).toString('base64');
      let passport = await Passport.create({
        protocol    : 'local'
      , password    : userNew.password
      , accessToken : token
      });

      await passport.setUser(user);
      return;
    } catch (e) {
      console.error(e);
      return;
    }
  }
}