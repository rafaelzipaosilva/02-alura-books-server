import { deletaFavoritoPorId, getTodosFavoritos, insereFavorito} from '../servicos/favorito';

function getFavoritos(req, res) {
    try {
        //throw new Error (''); //- comando para forçar um erro para testar o catch
        const livros = getTodosFavoritos();
        res.send(livros);
    } catch (error) {
        res.status(500);
        res.send({error:error.Error()});
    }
};

function postFavorito(req, res) {
    try {
        const id = req.params.id;

        insereFavorito(id);
        res.status(201);
        res.send('Livro inserido com sucesso');
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

function deleteFavorito(req, res) {
    try {
        const id = req.params.id;

        if(id && Number(id)) {
            deletaFavoritoPorId(id)
            res.send(`Item de ID nº ${id} removido com sucesso dos favoritos`)   
        } else {
            res.status(422); 
            res.send('ID inválido!');
        }

    } catch(error) {
        res.status(500);
        res.send(error.message);
    } 
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito
}