const {app} = require('../app');
const session = require('express-session');
const mongoStore = require('connect-mongo');

app.use(session({
    secret: "Voici ma cle secrete",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 14
    },
    store: mongoStore.create({
        mongoUrl: 'mongodb://Pouish:toto@127.0.0.1:27017/twitter_dwwm',
        ttl: 60 * 60 * 24 * 14
    })
}))