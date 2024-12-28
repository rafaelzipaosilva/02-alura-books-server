const { Router } = require('express');
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require('../controladores/livro');

const router = Router();

router.get('/', getLivros);

router.get('/id=:id', getLivro);

router.post('/', postLivro);

router.patch('/id=:id', patchLivro);

router.delete('/id=:id', deleteLivro);

module.exports = router;