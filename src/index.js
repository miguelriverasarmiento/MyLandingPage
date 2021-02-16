const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

// Settings
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// connecting to db
mongoose.connect('mongodb://localhost:27017')
  .then(db => console.log('Db connected'))
  .catch(err => console.log(err));
// Middlewares
/*app.use(express.json());
app.use(morgan('dev'));*/

// Routes
app.use(require('./routes/index'));
app.use(express.static('src'));

// listening the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});




