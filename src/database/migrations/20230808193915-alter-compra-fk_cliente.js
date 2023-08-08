'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('compra', 'fk_cliente', {
          type: Sequelize.STRING
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.changeColumn('compra', 'fk_cliente', {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.INTEGER,
        unique: true,
        type: Sequelize.INTEGER
      }),
    ]);
  },
};
