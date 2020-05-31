var express = require('express')
var bodyParser = require('body-parser')
var axios = require('axios')

var app = express()
var port = 3000

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: false }))

app.post('/api/submit', function(request, response) {

    axios.post('https://www.google.com/recaptcha/api/siteverify?secret=6LfhSv4UAAAAAAwNVMmPfbMY7l2oVppTZ_JcjZ7J&response=' + request.body.recaptcha)
        .then((googleRes) => {

            response.send(googleRes.data.success)

            if (!googleRes.data.success) {
                response.send(googleRes.data.success)
            }

            // Do database call

        })
})

app.listen(port, function() { console.log('listening on port ' + port) })