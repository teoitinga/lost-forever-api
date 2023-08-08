'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('perfil', {
            ID: {
                allowNull: false,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
                unique: true,
                type: Sequelize.STRING
            },
            DSC: {
                type: Sequelize.STRING(250),
                allowNull: true,
            },
            DESENV: {
                type: Sequelize.STRING(250),
                allowNull: true,
            },
            CONTATODESV: {
                type: Sequelize.STRING(250),
                allowNull: true,
            },
            VERSAO: {
                type: Sequelize.STRING(10),
                allowNull: true,
            },
            EMAIL: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            CODINSTALL: {
                type: Sequelize.STRING(10),
                allowNull: true,
            },
            UPDATEKEY: {
                type: Sequelize.STRING(10),
                allowNull: true,
            },
            ESTABELECIMENTO: {
                type: Sequelize.STRING(250),
                allowNull: true,
            },
            ENDERECOEST: {
                type: Sequelize.STRING(250),
                allowNull: true,
            },
            FONEEST: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            RESPONSAVELEST: {
                type: Sequelize.STRING(250),
                allowNull: true,
            },
            MSG1EST: {
                type: Sequelize.STRING(250),
                allowNull: true,
            },
            MSG2EST: {
                type: Sequelize.STRING(250),
                allowNull: true,
            },
            CIDADEEST: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            ULTUPDATE: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            TEMPOEXPIRA: {
                type: Sequelize.TINYINT,
                allowNull: true,
            },
            ESTADO: {
                type: Sequelize.ENUM,
                values: ['l','r'],
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
                type: Sequelize.CHAR(1),
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
        await queryInterface.dropTable('perfil');
    }
};