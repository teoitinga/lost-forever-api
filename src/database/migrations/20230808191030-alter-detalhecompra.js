'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('detalhecompra', 'id', {
          type: Sequelize.STRING
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.changeColumn('detalhecompra', 'id', {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.INTEGER,
        unique: true,
        type: Sequelize.INTEGER
      }),
    ]);
  },
};