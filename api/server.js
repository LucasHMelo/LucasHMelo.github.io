// ==> Exemplo usando o SOLID

const app = require('./src/app');

const port = process.env.PORT || 8000;

app.listen(port);
console.log('Aplicação executando na porta', port);
