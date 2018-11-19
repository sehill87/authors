var mongoose = require('mongoose');

var AuthorSchema = new mongoose.Schema({
    name: { type: String, require: true, minlength: [3, 'Name must contain at least 3 characters'] },
    created_at: { type: Date, default: Date.now},
    updated_at: { type: Date, default: Date.now},
});

mongoose.model('Author', AuthorSchema);