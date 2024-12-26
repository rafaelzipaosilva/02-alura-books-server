const { Router } = require('express');
const { getLivros } = require('../controladores/livro');

const router = Router();

router.get('/', getLivros);

router.post('/', (req, res) => {
    try {
        //throw new Error (''); //- comando para forçar um erro para testar o catch
        res.send('Você fez uma requisição do tipo POST');
    } catch (Error) {
        res.status(500);
        res.send(Error.message);
    }
});

router.patch('/', (req, res) => {
    try {
        //throw new Error (''); //- comando para forçar um erro para testar o catch
        res.send('Você fez uma requisição do tipo PATCH');
    } catch (Error) {
        res.status(500);
        res.send(Error.message);
    }   
});

router.delete('/', (req, res) => {
    try {
        //throw new Error (''); //- comando para forçar um erro para testar o catch
        res.send('Você fez uma requisição do tipo DELETE');
    } catch (Error) {
        res.status(500);
        res.send(Error.message);
    }
});

module.exports = router;