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

    storeditem.hasOne(models.content,{foreignKey:"document"})
    // →本当はhasOne。contentにもコラムを追加し、foreignKey設定


    storeditem.belongsTo(models.place,{foreignKey:"storageplace"})
    storeditem.belongsTo(models.user,{foreignKey:"originaluser"})
    storeditem.belongsTo(models.user,{foreignKey:"latestuser"})
  };
  return storeditem;
};