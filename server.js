const express = require('express')
const app = express()

app.use('/store', function (req, res, next) {
  console.log('Jestem pośrednikiem przy żądaniu do /store!')
  next()
})

app.get('/store', function (req, res) {
  res.send('To jest sklep!')
})

app.use('/', function (req, res, next) {
  console.log('Jestem pośrednikiem przy żadaniu do katalogu głównego!')
  next()
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000)
app.use(function (req, res, next) {
  res.status(404).send('Niestety, strona nie została odnaleziona.')
})

/* Samodzielny kod

const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.use(function(req, res, next) {
    console.log('Hej, jestem pośrednikiem przy żądaniu do /store!')
    next()
        app.get('/store', function (req, res) {
        res.send('To jest sklep')
        })
    })

const server = app.listen(3000, 'localhost', function () {
  const host = server.address().address
  const port = server.address().port

  console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port)
}) */
