const mongoose = require('mongoose')

const Book = mongoose.model('Book', {
    id: {
        type: Number,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
})

module.exports = Book