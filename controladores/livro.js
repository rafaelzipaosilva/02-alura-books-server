const { getTodosLivros } = require('../servicos/livro');

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

module.exports = {
    getLivros
}