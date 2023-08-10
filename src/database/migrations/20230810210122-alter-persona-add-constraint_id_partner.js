'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addConstraint('persona', {
        fields: ['id', 'partner'],
        type: 'UNIQUE',
        name: 'unique_id_partner',

      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      
    ]);
  },
};
