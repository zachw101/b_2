const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rake_my_cakes_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

require('../models/cake');