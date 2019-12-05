'use strict';
module.exports = (sequelize, DataTypes) => {
  const document = sequelize.define('document', {
    name: DataTypes.STRING
  }, {
    underscored: true,
  });
  document.associate = function(models) {
    // associations can be defined here
  };
  return document;
};