const express = require('express');

const app = express();

const port = 8000;

app.get('/',(req, res) => {
    res.send('Olá mundo Zipão!')
})

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
})