/*
 * Bearer Authentication Protocol
 *
 * Bearer Authentication is for authorizing API requests. Once
 * a user is created, a token is also generated for that user
 * in its passport. This token can be used to authenticate
 * API requests.
 *
 */

exports.authorize = async function(token, done) {
  let passport;
  try {
  	passport = await Passport.find({ accessToken: token });
  	User.findById(passport.user.id);
  	return done(null, user, { scope: 'all' });
  
  } catch (e) {
  	
  	if ( ! passport) {
  	  return done(null, false); 
  	}
  	return done(err);
  }
};
