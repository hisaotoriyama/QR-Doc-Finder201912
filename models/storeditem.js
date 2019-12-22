'use strict';
module.exports = (sequelize, DataTypes) => {
  const storeditem = sequelize.define('storeditem', {
    document: DataTypes.INTEGER,
    storageplace: DataTypes.INTEGER,
    originaluser: DataTypes.INTEGER,
    latestuser: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  storeditem.associate = function(models) {
    // associations can be defined here

    storeditem.belongsTo(models.content)
    storeditem.belongsTo(models.place)
    storeditem.belongsTo(models.user)
  };
  return storeditem;
};