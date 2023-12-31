'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('persona', 'id', {
        type: Sequelize.STRING,
        defaultValue: Sequelize.UUIDV4,
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.changeColumn('persona', 'id', {
        type: Sequelize.INTEGER
      }),
    ]);
  },
};
