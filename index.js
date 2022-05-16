const express = require('express');
const { talker, login } = require('./src/routes');
const middlewares = require('./src/middlewares');

const app = express();
app.use(express.json());
app.use('/talker', talker);
app.use('/login', login);

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use(middlewares.handleError);
app.listen(PORT, () => {
  console.log('Online');
});
