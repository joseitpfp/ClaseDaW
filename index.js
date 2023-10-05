const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('hola clase')
})

app.listen(3000)