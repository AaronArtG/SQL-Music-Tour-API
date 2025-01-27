'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Set_time.init({
    set_time_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  event_id: {
    type:DataTypes.INTEGER
  },
  stage_id: {
    type:DataTypes.INTEGER
  },
  band_id: {
    type:DataTypes.INTEGER
  },
  start_time: {
    type:DataTypes.TIME
  },
  end_time:{
    type: DataTypes.TIME
  },
  }, {
    sequelize,
    modelName: 'Set_time',
  });
  return Set_time;
};