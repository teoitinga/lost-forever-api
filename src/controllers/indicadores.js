const {
    ReasonPhrases,
    StatusCodes,
    getReasonPhrase,
    getStatusCode,
} = require('http-status-codes');

async function getData(req, res) {

    try{
        const response = {
            estabelecimento: 'Mercado do Produtor',
            totaldebitos: 278481.24
        }

        res.status(StatusCodes.OK).json(response)

    }catch(e){

        res.status(e.status).json(e)
    }

}
module.exports = {getData} 