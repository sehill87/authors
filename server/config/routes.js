var author = require('../controllers/authors');
// var review = require('../controllers/reviews');
var mongoose = require('mongoose')
var Author = mongoose.model('Author')
const path = require('path');
const session = require('express-session')

module.exports = function(app) {
    app.get('/api', function(req,res) {
        author.all_authors(req,res);
    }),
    app.get('/api/:id', function(req,res) {
        author.one_author(req,res);
    }),
    app.post('/api', function(req,res) {
        author.new(req,res);
    }),
    app.put('/api/:id', (req,res) => {
        author.update(req,res);
    }),
    app.delete('/api/:id', (req,res) => {
        author.remove(req,res);
    })
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}