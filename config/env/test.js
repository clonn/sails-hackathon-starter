/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  // models: {
  //   connection: 'someMongodbServer'
  // }

  models: {
    connection: 'database',
    migrate: process.env.MODELS_MIGRATE || 'drop'
  },
  connections: {
    database: {
      'user': process.env.MYSQL_ENV_MYSQL_USER_NAME || 'root',
      'password': process.env.MYSQL_ENV_MYSQL_USER_PASS || 'root',
      'database': process.env.MYSQL_ENV_MYSQL_USER_DB || 'starter',
      'host': 'localhost',
      'dialect': 'sqlite', // mysql
      storage: './database.sqlite',
      options: {
        'dialect': 'sqlite', // mysql
      //   'host': process.env.MYSQL_PORT_3306_TCP_ADDR || '127.0.0.1',
      //   'port': process.env.MYSQL_PORT_3306_TCP_PORT || 3306,
        
      //   // dialectOptions: {
      //   //   charset: 'utf8mb4'
      //   // }
      }
    }
  }

};
