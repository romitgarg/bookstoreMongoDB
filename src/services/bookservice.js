
const fs=require('fs')
const Book = require('../models/book')
const { model } = require('mongoose')


module.exports.getbooks = async () =>{

	const books = await Book.find({})
    return books

}


module.exports.getbookbyid = async(id) =>{
    const book = await Book.findById(id)
	return book
}




module.exports.deleteBook = async (id) => {
	 const book = await Book.findByIdAndDelete(id)
	 if (!book) {
		return null
	}

	res.send(book)

}



const saveBooks = (data) => {
    const book = new Book(data)
	return new Promise((resolve, reject) => {
		book.save()
		resolve()
	})

}



module.exports.addbook = async (book) =>{
    saveBooks(book)
}

module.exports.updateBook = async (data,id) => {
	console.log(id)
	const updates = Object.keys(data)
	console.log(updates)
    const allowedUpdates = ['name', 'author']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
	console.log(isValidOperation)
    if (!isValidOperation) {
        return null
	}
	console.log('sdsdsdsdsdsdsds')
	const book = await Book.findByIdAndUpdate(id, data, { new: true, runValidators: true })
	if (!book) {
		return null
	}

	res.send(book)
}

