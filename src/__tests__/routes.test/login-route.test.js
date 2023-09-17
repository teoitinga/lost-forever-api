const request = require('supertest');
const app = require('../../../server');

describe('Login controller - testes de integração', ()=>{
    it('Executando login de usuário', async ()=>{

        const login = {
            "login":"1-ASDJHSDASDKJL-ASDADADHKJHAS",
            "password":"jacare"
        };

        let response = await request(app)
                                .post('/login')
                                .send(login);
        //console.log(response)                 
        
        expect(response.status).toBe(200);
        
    });
})