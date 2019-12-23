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

    storeditem.belongsTo(models.content,{foeignKey:"document",targetKey:"id"})
    storeditem.belongsTo(models.place,{foeignKey:"storageplace",targetKey:"id"})
    storeditem.belongsTo(models.user,{foeignKey:"originaluser",targetKey:"id"})
    storeditem.belongsTo(models.user,{foeignKey:"latestuser",targetKey:"id"})
  };
  return storeditem;
};