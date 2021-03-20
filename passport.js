const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  Models = require('./models.js'),
  passportJWT = require('passport-jwt');

let Users = Models.User,
  JWTStrategy = passportJWT.Strategy,
  ExtractJWT = passportJWT.ExtractJwt;

//defines basic HTTP authentication for login requests, checks mongoose for username, not password (yet)
passport.use(new LocalStrategy({
  usernameField: 'Username',
  passwordField: 'Password'
}, (username, password, callback) => {
  console.log(username + '  ' + password);
  Users.findOne({ Username: username }, (error, user) => {
    if (error) {
      console.log(error);
      return callback(error);
    }

    if (!user) {
      console.log('Incorrect username.');
      return callback(null, false, { message: 'Incorrect username.' });
    }

    if (!user.validatePassword(password)) {
      console.log('Incorrect password.');
      return callback(null, false, { message: 'Incorrect password.' });
    }

    console.log('Finished');
    return callback(null, user);
  });
}));

passport.use(new JWTStrategy({
  //JWT extracted from header of HTTP request
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
}, (jwtPayload, callback) => {
  return Users.findById(jwtPayload._id)
    .then((user) => {
      return callback(null, user);
    })
    .catch((error) => {
      return callback(error)
    });
}));