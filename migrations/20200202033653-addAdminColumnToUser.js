'use strict';
//model/content.jsの変更も忘れないこと。
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users','is_admin',{
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      after: 'password'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users','is_admin');
  },
}
