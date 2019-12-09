const Authors = require('../models/Authors');

module.exports = {

    async store(req, res){

        const { name } = req.body;
        const { avatar } = req.body;

        let author = await Authors.findOne({name});
        
        if(!author) author = await Authors.create({name,avatar});

        return res.json(author);
    }
}