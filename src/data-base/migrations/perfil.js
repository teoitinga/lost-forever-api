'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('perfil', {
            ID: {
                type: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            DSC: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            DESENV: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            VERSAO: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            EMAIL: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            DESENV: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            DESENV: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            CODINSTALL: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            UPDATEKEY: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            ESTABELECIMENTO: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            ENDERECOEST: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            FONEEST: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            RESPONSAVELEST: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            MSG1EST: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            MSG2EST: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            CIDADEEST: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            ULTUPDATE: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            TEMPOEXPIRA: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            ESTADO: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            VALORINSTALL: {
                type: Sequelize.DECIMAL(6, 2),
                allowNull: true,
            },
            VALORMENSAL: {
                type: Sequelize.DECIMAL(6, 2),
                allowNull: true,
            },
            DRIVERBCK: {
                type: Sequelize.STRING(1),
                allowNull: true,
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
        await queryInterface.dropTable('perfil');
    }
};