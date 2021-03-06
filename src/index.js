const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// require('./controllers/authController')(app) // Repassa o app para o controller
// require('./controllers/projectController')(app) // Repassa o app para o controller

require('./app/controllers/index')(app)

app.listen(3333)