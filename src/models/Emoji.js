const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  return sequelize.define('emoji', {
    id: {
      type: DataTypes.STRING(255),
      primaryKey: true,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    }
  });
};