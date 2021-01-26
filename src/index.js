const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');

// Settings
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

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




