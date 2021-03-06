import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { User } from '../models/user.entity';
import { Group } from '../models/group.entity';
dotenv.config();


export const dataSource = new DataSource({
  type: process.env.DB_TYPE,
  host: process.env.POSTGRES_HOST,
  port: Number.parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  entities: [User, Group]
})

dataSource.initialize()
  .then(() => console.log("Data Source has been initialized!"))
  .catch((err) => console.log(err))


export default dataSource;