var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://josphat_n:pGezxKp4sGcOLsc8@cluster0.gcfg2ou.mongodb.net/',
    development: 'mongodb+srv://josphat_n:pGezxKp4sGcOLsc8@cluster0.gcfg2ou.mongodb.net/',
    test: 'mongodb+srv://josphat_n:pGezxKp4sGcOLsc8@cluster0.gcfg2ou.mongodb.net/',

    // production: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    // development: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    // test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
