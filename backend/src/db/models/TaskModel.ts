import {Model, DataTypes,} from "sequelize"
import config from "../config/db";

class Task extends Model {
    declare id: string;
    declare title: string;
    declare description?: string;
    declare status: 'pending' | 'done';
    declare startDate: Date
    declare updatingDate: Date

}

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
    type: DataTypes.ENUM('pending', 'done'),
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
    sequelize: config,
    modelName: 'Task',
    tableName: 'tasks',
    timestamps: false
  })

  export default Task;