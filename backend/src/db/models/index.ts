import { Sequelize } from "sequelize";
import * as config from '../config/db';



export default new Sequelize(config);