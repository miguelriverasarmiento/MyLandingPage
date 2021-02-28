const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const methodOverride = require("method-override");
//var User = require('./model/user');
// Settings
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// connecting to db


// Routes
app.use(require('./routes/index'));
app.use(express.static('src'));

// listening the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});




