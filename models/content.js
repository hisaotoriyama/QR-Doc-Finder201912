'use strict';
module.exports = (sequelize, DataTypes) => {
  const content = sequelize.define('content', {
    name: DataTypes.STRING
  }, {
    underscored: true,
  });
  content.associate = function(models) {
    // associations can be defined here
    // content.hasMany(models.storeditem)
    //content.hasOne(models.storeditem,{foreignKey:"document"})
    content.belongsTo(models.contentgroup,{foreignKey:"group"})
  };
  return content;
};