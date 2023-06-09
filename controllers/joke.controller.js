const Joke = require('../models/joke.model');

module.exports.findAllJokes = (req,res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({jokes: allJokes})
        })
        .catch((err) =>{
            res.status(500).json({message: "Yeah, that didnt work as expected", error: err})
        });
}

module.exports.findOneJoke = (req,res) => {
    Joke.find({_id: req.params.id})
        .then((oneJoke) => {
            res.json({jokes: oneJoke})
        })
        .catch((err) =>{
            res.status(500).json({message: "Yeah, that didnt work as expected", error: err})
        });
}

module.exports.createNewJoke = (req,res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json({jokes: newJoke})
        })
        .catch((err) => {
            res.status(500).json({message: "Yeah, that didnt work as expected", error: err})
        });
}

module.exports.updateJoke = (req,res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then((updateJoke) => {
            res.json({jokes: updateJoke})
        })
        .catch((err) =>{
            res.status(500).json({message: "Yeah, that didnt work as expected", error: err})
        });
}

module.exports.deleteJoke = (req,res) => {
    Joke.deleteOne({_id: req.params.id})
        .then((deleteJoke) => {
            res.json({jokes: deleteJoke})
        })
        .catch((err) =>{
            res.status(500).json({message: "Yeah, that didnt work as expected", error: err})
        });
}