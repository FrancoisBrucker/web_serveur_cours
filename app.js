var express = require('express')
var app = express()

var morgan = require('morgan')

const logger = require('./logger')

app.use(morgan('dev', {stream: {write:(log) => {logger.http(log)}}}))

app.use("/static", express.static(__dirname + '/static'))

app.get('/', (request, response) => {
    response
        .redirect(301, '/static/index.html')
})

api = require('./routes')
app.use('/api', api)


app.use(function (request,response) {

    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html');

    response.end("<html><head><title>la quatre cent quatre</title></head><body><h1>Et c'est la 404.</h1><img  src=\"https://www.leblogauto.com/wp-content/uploads/2020/04/Peugeot-404-1.jpg\" /></body></html>");

})

module.exports = app
