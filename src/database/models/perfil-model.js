const { Model, DataTypes } = require('sequelize');

class Perfil extends Model {

    static init(connection) {
        super.init({
            DSC: DataTypes.STRING,
            DESENV: DataTypes.STRING,
            CONTATODESV: DataTypes.STRING,
            VERSAO: DataTypes.STRING,
            EMAIL: DataTypes.STRING,
            CODINSTALL: DataTypes.STRING,
            UPDATEKEY: DataTypes.STRING,
            ESTABELECIMENTO: DataTypes.STRING,
            ENDERECOEST: DataTypes.STRING,
            FONEEST: DataTypes.STRING,
            RESPONSAVELEST: DataTypes.STRING,
            MSG1EST: DataTypes.STRING,
            MSG2EST: DataTypes.STRING,
            CIDADEEST: DataTypes.STRING,
            ULTUPDATE: DataTypes.STRING,
            TEMPOEXPIRA: DataTypes.STRING,
            ESTADO: DataTypes.STRING,
            VALORINSTALL: DataTypes.DECIMAL(6, 2),
            VALORMENSAL: DataTypes.DECIMAL(6, 2),
            DRIVERBCK: DataTypes.STRING(1),
            createdby: DataTypes.STRING,
            updatedby: DataTypes.STRING,
            created: DataTypes.DATE,
            updated: DataTypes.DATE
        }, {
            createdAt: 'created',
            updatedAt: 'updated',
            sequelize: connection,
            modelName: 'perfil',
        })
    }
};
module.exports = Perfil;