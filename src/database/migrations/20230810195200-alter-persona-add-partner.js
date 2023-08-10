'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('persona', 'partner', {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        defaultValue: undefined,
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.removeColumn('persona', 'partner', {
      }),
    ]);
  },
};
