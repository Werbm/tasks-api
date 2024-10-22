import sequelize, {Model, DataTypes,} from "sequelize"

class Task extends Model {}

Task.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description:{
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM,
    values: ['pending', 'done'],
    defaultValue: 'pending',
  },
  startDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatingDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
  }, {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks',
    timestamps: true
  })

  module.exports = Task;