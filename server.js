const express = require('express')
const bodyParser = require('body-Parser')
const app = express()

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