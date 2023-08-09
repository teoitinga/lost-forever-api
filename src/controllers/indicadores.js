const {
    ReasonPhrases,
    StatusCodes,
    getReasonPhrase,
    getStatusCode,
} = require('http-status-codes');

function getData(_, res) {

    const response = {
        estabelecimento: 'Mercado do Produtor',
        totaldebitos: 278481.24
    }

    res.status(StatusCodes.OK).json(response)
}
module.exports = {getData} 