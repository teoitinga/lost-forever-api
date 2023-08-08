'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('persona', {
            id: {
                allowNull: false,
                primaryKey: true,
                defaultValue: Sequelize.INTEGER,
                unique: true,
                type: Sequelize.STRING
            },
            apelido: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            categoria: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            data_cadastro: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            debito: {
                type: Sequelize.DECIMAL(6,2),
                allowNull: true,
            },
            endereco: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            fone: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            prazo: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            rg: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            senha: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            state: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            usuario: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            ultAtualizacao: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            createdby: {
                allowNull: true,
                type: Sequelize.STRING,
            },
            updatedby: {
                allowNull: true,
                type: Sequelize.STRING,
            },
            created: {
                allowNull: true,
                type: Sequelize.DATE
            },
            updated: {
                allowNull: true,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('persona');
    }
};