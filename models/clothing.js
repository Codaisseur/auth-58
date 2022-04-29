"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class clothing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      clothing.belongsTo(models.user, { foreignKey: "ownerId" });
    }
  }
  clothing.init(
    {
      color: DataTypes.STRING,
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "clothing",
    }
  );
  return clothing;
};
