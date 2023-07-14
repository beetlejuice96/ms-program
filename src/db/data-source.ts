import { DataSource, DataSourceOptions } from 'typeorm';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT, 10),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [process.env.TYPEORM_ENTITIES],
  migrations: [process.env.TYPEORM_MIGRATIONS],
  synchronize: false,
  logging: true,
  // ssl: {
  //   rejectUnauthorized: false,
  //   ca: process.env.MYSQL_ATTR_SSL_CA,
  // },
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
