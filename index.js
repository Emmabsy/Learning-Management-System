const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;
const jsonParser = bodyParser.json();
//const fileName = 'coursess.json';

app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', (request, response) => {
    response.render('index');
});

app.listen(port);
console.log('server listening on port 3000');