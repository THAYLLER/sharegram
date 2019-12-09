const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema({

    name: String,
    avatar: String,
    
});

module.exports = mongoose.model('Author',AuthorsSchema);