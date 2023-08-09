/** @param { import('express').Express} app */

module.exports = app => {
    app.get('/indicadores', (_, res) => {
        res.status(200).json({
            estabelecimento: 'Mercado do Produtor',
            totaldebitos: 278481.24
        })
    })
}