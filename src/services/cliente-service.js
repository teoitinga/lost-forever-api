const Model = require('../database/models/persona-model');
const Dto = require('../dtos/cliente-dto');


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

        const response = await Model.sequelize.query(query, { type: Model.sequelize.QueryTypes.SELECT });

        return new Dto(response[0]);
    }
    async findByNameContain(text, parnterid){
        const query = `
        select * from lost.persona
        where
        persona.name like('%${text}%')
        and persona.categoria = 'c'
        and persona.partner = ${parnterid}
            ;
        `;

    const response = await Model.sequelize.query(query, { type: Model.sequelize.QueryTypes.SELECT });

    return new Dto(response[0]);       
    }
}

module.exports = ClienteService