'use strict';
module.exports = (sequelize, DataTypes) => {
  const contentgroup = sequelize.define('contentgroup', {
    name: DataTypes.STRING
  }, {
    underscored: true,
  });
  contentgroup.associate = function(models) {
    // associations can be defined here
  };
  return contentgroup;
};