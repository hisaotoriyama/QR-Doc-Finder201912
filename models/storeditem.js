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

    storeditem.belongsTo(models.content, {
      foreignKey: 'document',
      onDelete:'CASCADE',
    })
    storeditem.belongsTo(models.place, {
      foreignKey: 'storageplace',
      onDelete:'CASCADE',
    })
    storeditem.belongsTo(models.user,{
      foreignKey:'latestuser',
      onDelete:'CASCADE',
    })
    storeditem.belongsTo(models.user,{
      foreignKey:'originaluser',
      onDelete:'CASCADE',
    })
  };
  return storeditem;
};