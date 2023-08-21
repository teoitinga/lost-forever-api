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
        console.log('response ', response)
        res.status(StatusCodes.OK).json(response)

    }catch(e){
        console.log(e)
        res.status(e.status).json(e)
    }

}
module.exports = {getData} 