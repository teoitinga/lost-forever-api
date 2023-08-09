function getData(_, res) {
    res.status(200).json({
        estabelecimento: 'Mercado do Produtor',
        totaldebitos: 278481.24
    })
}
module.exports = {getData}