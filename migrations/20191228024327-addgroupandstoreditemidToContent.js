'use strict';
//model/content.jsの変更も忘れないこと。
module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('contents', 'groupid', {
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
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('contents', 'groupid'),
      queryInterface.removeColumn('contents', 'storeditemid')
    ]);
  }
};