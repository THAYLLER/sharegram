const Feeds = require('../models/Feeds');
const Authors = require('../models/Authors');

module.exports = {

    async index(req, res) {

        let feeds = await Feeds.find().populate('author');

        return res.json(feeds);
    },
    async store(req, res){

        const { image } = req.body;
        const { small } = req.body;
        const { aspectRatio } = req.body;
        const { description } = req.body;
        const { authorId } = req.body;

        const author = Authors.findById({authorId})

        if(!author) return res.status({error: 'Author não encontrado'});

        const feed = await Feeds.create({image,small,aspectRatio,description,author: authorId});

        return res.json(feed);
    }
}