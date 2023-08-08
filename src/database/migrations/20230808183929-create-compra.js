'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('compra', {
            id: {
                allowNull: false,
                primaryKey: true,
                defaultValue: Sequelize.INTEGER,
                unique: true,
                type: Sequelize.INTEGER
            },
            acertado_em: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            data_compra: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            debAtual: {
                type: Sequelize.FLOAT,
                allowNull: true,
            },
            entregue_a: {
              type: Sequelize.STRING,
              allowNull: true,
            },
            valor_compra: {
                type: Sequelize.FLOAT,
                allowNull: true,
            },
            fk_cliente: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            entregue_por: {
                type: Sequelize.INTEGER,
                allowNull: true,
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('compra');
    }
};