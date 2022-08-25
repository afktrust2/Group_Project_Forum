const Forum = require("../models/forum.model.js");

module.exports = {
    createForum: (req, res) => { 
        Forum.create(req.body) 
            .then((newForum) => res.json(newForum)) 
            .catch((err) => console.log(err));
    },

    allForums: (req, res) => {
        Forum.find({}) 
            .then((allForum) => res.json(allForum))
            .catch((err) => console.log(err));
    },

    oneForum: (req, res) => {
        Forum.findOne({ _id: req.params.id })
            .then((oneForum) => res.json(oneForum))
            .catch((err) => console.log(err));
    },

    updateForum: (req, res) => {
        Forum.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true, 
            runValidators: true,
        })
            .then((updatedForum) => res.json(updatedForum))
            .catch((err) => console.log(err));
    },

    deleteForum: (req, res) => {
        Forum.deleteOne({ _id: req.params.id })
            .then((deletedId) => res.json(deletedId))
            .catch((err) => console.log(err));
    },
};