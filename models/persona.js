const { Model, DataTypes } = require('sequelize');

class Persona extends Model {

    static init(connection) {
        super.init({
            apelido: DataTypes.STRING,
            categoria: DataTypes.STRING,
            data_cadastro: DataTypes.DATE,
            debito: DataTypes.DECIMAL(6,2),
            endereco: DataTypes.STRING,
            fone: DataTypes.STRING,
            nome: DataTypes.STRING,
            prazo: DataTypes.INTEGER,
            rg: DataTypes.STRING,
            senha: DataTypes.STRING,
            state: DataTypes.INTEGER,
            usuario: DataTypes.INTEGER,
            ultAtualizacao: DataTypes.DATE,
            createdby: DataTypes.STRING,
            updatedby: DataTypes.STRING,
            created: DataTypes.DATE,
            updated: DataTypes.DATE
        }, {
            createdAt: 'created',
            updatedAt: 'updated',
            sequelize: connection,
            modelName: 'persona',
        })
    }
};
module.exports = Persona;