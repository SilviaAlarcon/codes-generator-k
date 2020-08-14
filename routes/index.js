'use strict'

const express = require('express')
const bookControllers = require('../controllers/book')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/books', bookControllers.getBooks)
api.get('/books/:bookId', bookControllers.getBook)
api.get('/books/all-books', bookControllers.renderBook)

api.post('/books', bookControllers.saveBook)
api.put('/books/:bookId', auth, bookControllers.updateBook)
api.delete('/books/:bookId', auth, bookControllers.deleteBook)
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth, (req, res) => {
    res.status(200).send({ message: 'Acceso permitido' })
})

module.exports = api 