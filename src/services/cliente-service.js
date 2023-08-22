const Model = require('../database/models/persona-model');
const Dto = require('../dtos/cliente-dto');
const Exception = require('../exceptions/lost-exception');
const {

    StatusCodes,

} = require('http-status-codes');
class ClienteService {

    async getClienteById(id, parnterid) {

        const query = `
            select * from lost.persona
            where
            persona.id=${id}
            and persona.categoria = 'c'
            and persona.partner = ${parnterid}
                ;
            `;
        try {

            const response = await Model.sequelize.query(query, { type: Model.sequelize.QueryTypes.SELECT });
            return new Dto(response[0]);

        } catch (e) {

            const exception = await new Exception({
                name: 'Cliente não localizado',
                message: 'Não foi localizado nenhum registro para este cliente!',
                status: await StatusCodes.NOT_FOUND,
            });

            throw exception;
        }

    }
    async findByNameContain(text, parnterid) {

        const query = `
        select * from lost.persona
        where
        (
            persona.nome like('%${text}%')
            or persona.nome like('%${text}%')
            or persona.fone like('%${text}%')
        )
        and persona.categoria = 'c'
        and persona.partner = '${parnterid}'
            ;
        `;
        try {
            const response = await Model.sequelize.query(query, { type: Model.sequelize.QueryTypes.SELECT });
            if(response.length == 0){
                throw new Error();
            }
            return response.map(r=> new Dto(r));

        } catch (e) {
            const exception = await new Exception({
                name: 'Cliente não localizado',
                message: `Não foi localizado nenhum registro para o cliente ${text}`,
                status: await StatusCodes.NOT_FOUND,
            });

            throw exception;
        }

    }
}

module.exports = ClienteService