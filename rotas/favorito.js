const { Router } = require('express');
const { getFavoritos, postFavorito, deleteFavorito } = require('../controladores/favorito');

const router = Router();

router.get('/', getFavoritos);

router.post('/id=:id', postFavorito);

router.delete('/id=:id', deleteFavorito);

module.exports = router;