const mongoose = require('mongoose');

const FeedSchema = new mongoose.Schema({

    image: String,
    small: String,
    aspectRatio: String,
    description: String,
    author: {

        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
});

module.exports = mongoose.model('Feed',FeedSchema);