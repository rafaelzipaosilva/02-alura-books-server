function getLivros(req, res) {
    try {
        //throw new Error (''); //- comando para forçar um erro para testar o catch
        res.send('Olá mundo Zipão!')
    } catch (error) {
        res.status(500);
        res.send({error:error.Error()});
    }
};

module.exports = {
    getLivros
}