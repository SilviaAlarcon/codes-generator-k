'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
    if (err) {
        return console.log(`Ahorita te digo porque me morí ${err}`)
    }
    console.log('Conexión con la base de datos')

    app.listen(config.port, () => {
        console.log(`Conectado en http://localhost:${config.port}`)
    })
})


