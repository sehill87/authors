const mongoose = require('mongoose'),
    Author = mongoose.model('Author')
const session = require('express-session')

module.exports = {
    all_authors: function (req, res) {
        console.log("----")
        Author.find({}, function (err, authors) {
            if (err) {
                console.log(err);
            } else {
                res.json(authors);
            }
        })
    },
    
    one_author: function (req, res) {
        Author.findOne({ _id: req.params.id }, function (err, name) {
            if (err) {
                console.log(err)
            } else {
                res.json(name)
            }
        })
    },
    
    new: function (req, res) {
        console.log('REQUEST', req.body.name)
        var author = new Author({ name: req.body.name });
        console.log(author)
        author.save(function (err) {
            if (err) {
                console.log(err);
                res.json({ message: "Error!!!", errors: err })
            } else {
                res.json({ message: "Success!!!", author: author })
                // res.redirect('/tasks')
            }
        })
    },

    update: function(req, res) {
        var updates = {};
        if(req.body.name) {
            updates['name'] = req.body.name;
        }
        updates['updated_at'] = Date.now();
        console.log(updates)
        Author.updateMany({ _id: req.params.id}, {$set: updates}, {runValidators: true}, function(err, author) {
            if(err) {
                console.log('something went wrong!')
                res.json({ message: "Error!!!", errors: err })
            } else {
                res.json({ message: 'Updates Complete!', author: author })
            }
        })
    },

    remove: function (req, res) {
        Author.deleteOne({ _id: req.params.id }, function (err) {
            if (err) {
                console.log('Error????');
                console.log(err);
            } else {
                res.json({ message: "Deleted!!!", _id: req.params.id})
                // res.redirect('/tasks');
            }
        })
    }
}

