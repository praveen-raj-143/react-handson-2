const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('<h1>EXPRESS </h1><br/><h2>Express is a popular Node.js framework for building web applcations.It provides a set of tools and utilities for creating server-side applications that can handle HTTP requests and responses, manage routing, and interact with databases and other third-party services.</h2>')
  
})

app.get('/api', function (req, res) {
    res.send('<h1>This is API page</h1>')
  })

app.get('/main', function (req, res) {
    res.send('<h1>This is Main Page</h1>')
  })

app.listen(3000)