'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    underscored: true,
  });
  user.associate = function(models) {
    // associations can be defined here

    // user.hasMany(models.storeditem)
  };
  return user;
};