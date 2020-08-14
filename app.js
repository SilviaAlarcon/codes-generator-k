'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const app = express()
const api = require('./routes/index')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.engine('.hbs', hbs({
    defaultLayout: 'default',
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

app.use('/api', api)

app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/', (req, res) => {
    res.render('book')
})

app.get('/generator', (req, res) => {
    res.render('generator')
})

app.get('/pruebas', (req, res) => {
    res.render('front')
})

app.get('/all-books', (req, res) => {
    res.render('all-books')
})


module.exports = app