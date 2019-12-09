const Authors = require('../models/Authors');

module.exports = {
    
    async index(req, res) {

        let authors = await Authors.find();

        return res.json(authors);
    },
    async store(req, res){

        const { name } = req.body;
        const { avatar } = req.body;

        let author = await Authors.findOne({name});
        
        if(!author) author = await Authors.create({name,avatar});

        return res.json(author);
    }
}