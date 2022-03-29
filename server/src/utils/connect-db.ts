import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();

export const connect = () => {
  
  const dataSource = new DataSource({
    type: "mongodb",
    url: process.env.MONGO_URL,
    useNewUrlParser: true,
    synchronize: true,
    logging: true,
  })
  
  dataSource.initialize()
    .then(() => console.log("Data Source has been initialized!"))
    .catch((err) => console.log(err))

  return dataSource;
}

export default connect;