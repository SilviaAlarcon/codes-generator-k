'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = Schema({
    name: String,
    level: {
        type: String, enum: [
            'CONALEP',
            'Bachillerato Tecnológico',
            'Bachillerato General']
    },
    author: {
        type: String, enum: [
            'Silvia',
            'Ana',
            'Pablito']
    },
    disciplinaryField: {
        type: String, enum: [
            'Humanidades',
            'Matemáticas',
            'Comunicación']
    },
    lote: { type: Number, default: 0 },
    idBook: { type: Number, default: 0 },
    codes: {
        code: String
    }
})

module.exports = mongoose.model('Book', BookSchema)