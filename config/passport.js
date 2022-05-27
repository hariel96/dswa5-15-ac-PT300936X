var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var findOrCreate = require('mongoose-findorcreate');
var mongoose = require('mongoose');

module.exports = function() {

    var Usuario = mongoose.model('Usuario');

    passport.use(new GitHubStrategy({
        clientID: 'Iv1.a380ab945082ef74',
        clientSecret: '53b97249bd32f02bab05931dcfe0b03751645e76',
        callbackURL: 'http://localhost:5000/auth/github/callback'
    }, function(accessToken, refreshToken, profile, done) {

        Usuario.findOrCreate({ "login": profile.username }, { "nome": profile.username },
            function(erro, usuario) {
                if (erro) {
                    return done(erro);
                }
                return done(null, usuario);
            }
        );
    }));

    passport.serializeUser(function(usuario, done) {
        done(null, usuario._id);
    });

    passport.deserializeUser(function(id, done) {
        Usuario.findById(id).exec()
            .then(function(usuario) {
                done(null, usuario);
            });
    });
};