'use strict';
module.exports = (sequelize, DataTypes) => {
  const content = sequelize.define('content', {
    groupid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    storeditemid: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  content.associate = function(models) {
    // associations can be defined here
    content.hasOne(models.storeditem,{foreignKey:"document", onDelete: "set null | cascade", hooks:false})
    content.belongsTo(models.contentgroup,{foreignKey:"groupid"})
  };

  return content;
};