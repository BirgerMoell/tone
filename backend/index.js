var express = require('express')
var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.use('/public', express.static(__dirname + '/public'))

io.on('connection', function (socket) {
  console.log('an user connected')
})

http.listen(4000, function () {
  console.log('listening on *:3000')
})
