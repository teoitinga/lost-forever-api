'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('detalhecompra', {
            id: {
                allowNull: false,
                primaryKey: true,
                defaultValue: Sequelize.INTEGER,
                unique: true,
                type: Sequelize.INTEGER
            },
            desconto: {
                type: Sequelize.FLOAT,
                allowNull: true,
            },
            dsc: {
              type: Sequelize.STRING,
              allowNull: true,
            },
            qtd: {
                type: Sequelize.FLOAT,
                allowNull: true,
            },
            vltotal: {
                type: Sequelize.FLOAT,
                allowNull: true,
            },
            vlunit: {
                type: Sequelize.FLOAT,
                allowNull: true,
            },
            fKcompra: {
                type: Sequelize.INTEGER,
                allowNull: true,
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('detalhecompra');
    }
};