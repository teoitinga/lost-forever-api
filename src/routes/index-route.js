/** @param { import('express').Express} app */

module.exports = app => {
    app.get('/', (_, res) => {
        res.send('Welcome, this is a root route!')
    })
}