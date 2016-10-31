/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  index: (req, res) => {
    return res.view('home');
  },

  account: (req, res) => {
    return res.view('auth/account');
  },

  apiName: (req, res) => {
  	let name = req.params['apiName'];
  	return res.view(`api/${name}`);
  }
};
