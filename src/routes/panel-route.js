
/** @param { import('express').Express} app */
module.exports = app => {
    app.get('/panel', (_, res) => {
        res.send('Você foi logado com sucesso!')
    })
    // Chefe da divisão
    app.get('/panel/vendas', (_, res) => {
        res.send('implementar lista ultimas 5 vendas')
    })
    app.get('/panel/balanco-mensal', (_, res) => {
        res.send('implementar lista um compliado de vendas e recebimentos por mes')
    })
    app.get('/panel/acertos-pendentes', (_, res) => {
        res.send('implementar: lista as contas pagas não validadas')
    })
    app.get('/panel/totaliza-débito', (_, res) => {
        res.send('implementar: total de debitos registrados para esta empresa(contas a receber)')
    })
    
    //Demais funcionários
    app.get('/panel/ultimas-compras', (_, res) => {
        res.send('implementar: lista as ultimas compras registradas pelo funcionário')
    })
    app.get('/panel/compras', (_, res) => {
        res.send('implementar: lista as contas pagas não validadas')
    })

    //Cliente
    app.get('/panel/acertos-pendentes', (_, res) => {
        res.send('implementar: lista as contas pagas não validadas')
    })


}