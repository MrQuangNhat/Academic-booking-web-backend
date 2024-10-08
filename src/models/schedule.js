'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Schedule extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Schedule.belongsTo(models.Allcodes, {
                foreignKey: 'timeType', targetKey: 'keyMap', as: 'timeTypeData'
            })
        }
    };
    Schedule.init({
        currentNumber: DataTypes.INTEGER,
        maxNumber: DataTypes.INTEGER,
        date: DataTypes.STRING,
        timeType: DataTypes.STRING,
        teacherId: DataTypes.INTEGER,



    }, {
        sequelize,
        modelName: 'Schedule',
        tableName: 'schedule',
    });
    return Schedule;
};