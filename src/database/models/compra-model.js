const { Model, DataTypes } = require('sequelize');

class CompraModel extends Model {

    static init(connection) {
        super.init({
            acertado_em: DataTypes.DATE,
            data_compra: DataTypes.DATE,
            debAtual: DataTypes.DECIMAL(6, 2),
            entregue_a: DataTypes.STRING,
            valor_compra: DataTypes.DECIMAL(6, 2),
            fk_cliente: DataTypes.STRING,
            entregue_por: DataTypes.STRING,
            fkpartner: DataTypes.STRING,
        }, {
            createdAt: 'created',
            updatedAt: 'updated',
            sequelize: connection,
            modelName: 'compra',
        })
    }
};
module.exports = CompraModel;