# sailsjs-hackathon-starter

Hackathon starter base a [Sails](http://sailsjs.org) application. it is base on sequelize orm (support sqlite, mysql, progresSQL)

![](https://lh4.googleusercontent.com/-PVw-ZUM9vV8/UuWeH51os0I/AAAAAAAAD6M/0Ikg7viJftQ/w1286-h566-no/hackathon-starter-logo.jpg)
Hackathon Starter 
=======================

[![Dependency Status](https://david-dm.org/clonn/sails-hackathon-starter/status.svg?style=flat)](https://david-dm.org/sahat/hackathon-starter) [![Build Status](https://travis-ci.org/clonn/sails-hackathon-starter.svg?branch=master)](https://travis-ci.org/clonn/sails-hackathon-starter) [![Thinkful Pair on Node](https://tf-assets-staging.s3.amazonaws.com/badges/thinkful_repo_badge.svg)](http://start.thinkful.com/node/)

**Live Demo**: https://sails-hackathonstarter.herokuapp.com/

user and password

```
user@user.com / 1234
```

## install and run

```
git clone https://github.com/clonn/sails-hackathon-starter.git && sails-hackathon-starter
npm i # or yarn

```

start application

```
npm start
```

and open 
```
http://localhost:1337
```

## social network config

3rd party connect config, file path:
```
config/passport.js

```

## database config

There is an exmaple for developement mode.
```
config/env/development.js
```
## plugins and support

 * [sails-hook-sequelize]()
 * [sails-hook-autoreload-extend]()
 * support `await` and `asnyc`
 * babel include


License
-------

The MIT License (MIT)