'use strict'

const Book = require('../models/book')

function getBooks(req, res) {
  Book.find({}, (err, books) => {
    if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
    if (!books) return res.status(404).send({ message: 'Los libros no existen' })

    res.status(200).send({ books })//same books: books
  })
}

function getBook(req, res) {
  let bookId = req.params.bookId

  Book.findById(bookId, (err, book) => {
    if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
    if (!book) return res.status(404).send({ message: 'El libro no existe' })

    res.status(200).send({ book }) //same book : book
  })
}

function saveBook(req, res) {
  console.log('POST /api/book')
  console.log(req.body)

  let book = new Book()
  book.name = req.body.name
  book.level = req.body.level
  book.author = req.body.author
  book.disciplinaryField = req.body.disciplinaryField
  book.lote = req.body.lote
  book.idBook = req.body.idBook
  book.codes = req.body.codes

  book.save((err, bookColletion) => {
    if (err) res.status(500).send({ message: `Error al salvar en la base de datos: ${err}` })
    res.status(200).send({ book: bookColletion })
  })
}

function renderBook(req, res) {
  let book = Book.find();
  res.render({ book: bookColletion })
}

function updateBook(req, res) {
  let bookId = require.params.bookId
  let update = req.body

  Book.findByIdAndUpdate(bookId, update, (err, bookUpdated) => {
    if (err) res.status(500).send({ message: `Error al actualizar el libro: ${err}` })

    res.status(200).send({ book: bookUpdated })
  })
}

function deleteBook(req, res) {
  let bookId = req.params.bookId
  Book.findById(bookId, (err, book) => {
    if (err) res.status(500).send({ message: `Error al eliminar el libro: ${err}` })

    if (!book) return res.status(404).send({ message: 'El libro que quiere eliminar no existe' })
    book.remove(err => {
      if (err) res.status(500).send({ message: `Error al eliminar el libro: ${err}` })
      res.status(200).send({ message: `El libro ha sido eliminado` })
    })
  })
}

module.exports = {
  getBooks,
  getBook,
  saveBook,
  renderBook,
  updateBook,
  deleteBook
}