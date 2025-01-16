const express = require('express');
const rotaLivro = require('./rotas/livro');
<<<<<<< HEAD
const rotaFavorito = require('./rotas/favorito');

const cors = require('cors');
=======
>>>>>>> parent of bd8b74c (aula2)

const app = express();
app.use(express.json());

const port = 8000;

app.use('/livros', rotaLivro);
app.use('/favoritos', rotaFavorito);

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
})