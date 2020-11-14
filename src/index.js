const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Este endpoint utiliza o verbo GET.',
  });
});

app.post('/', (req, res) => {
  res.status(200).json({
    message: 'Este endpoint utiliza o verbo POST',
  });
});

app.put('/', (req, res) => {
  res.status(200).json({
    message: 'Este endpoint utiliza o verbo PUT',
  });
});

app.post('/:nome', (req, res) => {
  res.status(200).json({
    message: `Este emdpoint recebe o nome ${req.params.nome} via Corpo da requisição`,
  });
});

app.put('/estudante', (req, res) => {
  res.status(200).json({
    message: `Este emdpoint recebe o nome ${req.body.nome} via Corpo da requisição`,
  });
});

app.delete('/', (req, res) => {
  res.status(200).json({
    message: 'Este endpoint utiliza o verbo DELETE',
  });
});

app.listen(3000, () => console.log('Server rodando na porta em localhost:4003'));
