const mongoose = require('mongoose');

mongoose.connect('mongodb://Pouish:toto@127.0.0.1:27017/twitter_dwwm', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
    console.log("Connexion a la db établie")
}).catch( err => {
    console.log(err);
})