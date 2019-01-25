const express = require('express');
var bodyParser = require('body-parser')

var app = express()
var path = require('path');
app.use(bodyParser.urlencoded({ extended: false }))
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, '/dist'));
app.use(express.static(__dirname + '/dist'));

// app.use("/", function (req, res) {
//     res.render("index.html")
// })

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});
