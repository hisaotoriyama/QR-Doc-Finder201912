'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.addColumn('contents', 'group', {
        type: Sequelize.INTEGER,
        after: 'id',
        references: {
          model: 'contentgroups',
          key: 'id'
        }
      }),
      queryInterface.addColumn('contents', 'storeditemid', {
        type: Sequelize.INTEGER,
        after: 'name',
        references: {
          model: 'storeditems',
          key: 'id'
        }
      })
    ];
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn('contents', 'group'),
      queryInterface.removeColumn('contents', 'storeditemid')
    ];
  }
};