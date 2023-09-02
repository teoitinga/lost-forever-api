const { Model, DataTypes } = require('sequelize');

class DetalheCompraModel extends Model {

    static init(connection) {
        super.init({
            dsc: DataTypes.STRING,
            qtd: DataTypes.DECIMAL(6, 2),
            vltotal: DataTypes.DECIMAL(6, 2),
            vlunit: DataTypes.DECIMAL(6, 2),
            desconto: DataTypes.DECIMAL(6, 2),
            fKcompra: DataTypes.STRING,
            fkpartner: DataTypes.STRING,
            fkpartner: DataTypes.STRING,
        }, {
            createdAt: 'created',
            updatedAt: 'updated',
            sequelize: connection,
            modelName: 'detalhecompra',
        })
    }
};
module.exports = DetalheCompraModel;