import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    mysqlDatabase: {
      host: process.env.TYPEORM_HOST,
      username: process.env.TYPEORM_USERNAME,
      port: parseInt(process.env.TYPEORM_PORT, 10),
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      synchronize: false,
      migrations: process.env.TYPEORM_MIGRATIONS,
      UPLOADED_FILES_DESTINATIO: process.env.UPLOADED_FILES_DESTINATION,
    },
    server: {
      port: process.env.PORT,
    },
  };
});
