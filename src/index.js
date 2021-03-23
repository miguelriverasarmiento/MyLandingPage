const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 4000;

// Settings
//app.set('port', 5000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use(require('./routes/index'));
app.use(express.static('src'));

// listening the server
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

