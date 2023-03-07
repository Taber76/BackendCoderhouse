const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy 

const { users } = require('../class/userContainer')


passport.use('login', new LocalStrategy(
  async function( username, password, done ) {
    const validateUser = await users.checkUser (username, password)
    if ( validateUser.result ) {
      return done( null, { username: username } )
    } else {
      return done( null, false )
    }
  }
))


passport.use('googleauth', new GoogleStrategy({
  clientID: 'CLIENT_ID',
  clientSecret: 'CLIENT_SECRET',
  callbackURL: 'hyyp://localhost:8080/session/logingoogle',
  authorizationURL: 'https://accounts.google.com/o/oauth2/v2/auth',
  tokenURL: 'https://oauth2.googleapis.com/token'
},
  async function ( accessToken, refreshToken, profile, done ) {
    console.log('------------------------------------------',28)
    console.log(accessToken)
    return done( null, accessToken)
  }
))


passport.use('register', new LocalStrategy(
  async function( username, password, done ) {
    if ( await users.addUser (username, password ) ) {
      return done( null, { username: username } )
    } else {
      return done( null, false )
    }
  }
))


passport.serializeUser(function(user, done) {
  done(null, user.username)
})

passport.deserializeUser(function(username, done) {
  done(null, { username: username })
})