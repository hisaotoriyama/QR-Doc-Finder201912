'use strict';
module.exports = (sequelize, DataTypes) => {
  const content = sequelize.define('content', {
    group: DataTypes.INTEGER,
    name: DataTypes.STRING,
    storeditemid: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  content.associate = function(models) {
    // associations can be defined here
    // content.hasOne(models.storeditem,{foreignKey:"document"})
    content.belongsTo(models.contentgroup,{foreignKey:"group"})
  };
  return content;
};