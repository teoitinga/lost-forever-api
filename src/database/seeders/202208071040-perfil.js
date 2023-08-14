'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('perfil', [
      {
        ID: 'FF19491D-B9A4-417A-8D70-CFFCB1D7D398',
        DSC: 'LOST - Sistema para gestão de débitos',
        DESENV: "João Paulo Santana Gusmão",
        CONTATODESV: "(33) 9 9906-5029",
        VERSAO: "V 2.2017 A",
        EMAIL: "teo.itinga@gmail.com",
        CODINSTALL: "ASDJHSDASDKJL-ASDADADHKJHAS", 
        UPDATEKEY: "EPRIUYHKSF",
        ESTABELECIMENTO: "Casa do Agricultor",
        ENDERECOEST: "Rua Rui Barbosa",
        FONEEST: "(33) 3733-1658",
        RESPONSAVELEST: "Vercino Costa Faria Filho",
        MSG1EST: "Sua melhor compra é aqui!",
        MSG2EST: "Nosso compromisso com o agricultor está em primeiro lugar",
        CIDADEEST: "Itinga",
        ULTUPDATE: "2022-05-10 08:28:11",
        TEMPOEXPIRA: "6",
        ESTADO: "l",
        VALORINSTALL: "100",
        VALORMENSAL: "5",
        DRIVERBCK: "f",
        //createdby: 'AASDKHADADA-ADSDLAKDJLAKDS-ASDADASDAS',
        //created: "2022-02-02 08:28:11",
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('perfil', null, {});
  }
};