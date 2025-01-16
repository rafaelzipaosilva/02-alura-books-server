const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletarLivroPorId } = require('../servicos/livro');

function getLivros(req, res) {
    try {
        //throw new Error (''); //- comando para forçar um erro para testar o catch
        const livros = getTodosLivros();
        res.send(livros);
    } catch (error) {
        res.status(500);
        res.send({error:error.Error()});
    }
};

function getLivro(req, res) {
    try {
        //throw new Error (''); //- comando para forçar um erro para testar o catch
        const id = req.params.id;
        const livro = getLivroPorId(id);
        res.send(livro);
    } catch (error) {
        res.status(500);
        res.send({error:error.Error()});
    }
};

function postLivro(req, res) {
    try {
        const livroNovo = req.body;
        insereLivro(livroNovo);
        res.status(201);
        res.send('Livro inserido com sucesso');
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;

        modificaLivro(body,id);
        res.send(`Item de ID nº ${id} modificado com sucesso`)

    } catch(error) {
        res.status(500);
        res.send(error.message);
    } 
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id;
        deletarLivroPorId(id);
        res.send(`Item de ID nº ${id} removido com sucesso`)

    } catch(error) {
        res.status(500);
        res.send(error.message);
    } 
}
module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}