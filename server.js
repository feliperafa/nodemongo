const express = require('express')
const bodyParser = require('body-Parser')
const mongoose = require('mongoose')
const Usuario = require('./src/models/usuarioModel')

const app = express()

//Conexão com o banco mongoDB
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/backendDB', { 
    useNewUrlParser: true,
     useUnifiedTopology: true 
 })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const routes = require('./src/routes/usuarioroutes')

routes(app)

app.route('/').get((req, res) => {
    res.send('Acessou API do Backend')
})

const port = process.env.PORT || 3001

app.listen(port)

console.log('Aplicação Iniciada na Porta', port)