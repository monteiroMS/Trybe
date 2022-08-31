const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const salesRouter = require('./routes/sales');
app.use('/sales', salesRouter);

const signUpRouter = require('./routes/signup');
app.use('/signup', signUpRouter);

app.listen(3002, () => { console.log('Ouvindo na porta 3002'); });
