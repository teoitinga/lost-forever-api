const request = require('supertest');
const app = require('../../../server');

describe('Analizando Controller Cliente', ()=>{
    it('Criando novo cliente', async ()=>{

        const id = 459;

        let response = await request(app)
                                .post('/cliente/:id')
                                .send(id);
        console.log(response)                 
        
        expect(response.status).toBe(200);
        
        expect(response._body['nome']).toBe('João Paulo');
        expect(response._body['categoria']).toBe('c');
        expect(response._body['debito']).toBe(0);
    });
});