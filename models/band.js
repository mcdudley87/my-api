'use strict';
module.exports = (sequelize, DataTypes) => {
  const band = sequelize.define('band', {
    bandName: DataTypes.STRING,
    memberNames: DataTypes.STRING,
    sinceYear: DataTypes.INTEGER,
    albumsOut: DataTypes.INTEGER
  }, {});
  band.associate = function(models) {
    // associations can be defined here
  };
  return band;
};