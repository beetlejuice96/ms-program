import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import envConfig from 'src/config/env.config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [envConfig.KEY],
      useFactory: async (configService: ConfigType<typeof envConfig>) => {
        const { host, port, username, password, database, migrations } =
          configService.mysqlDatabase;
        return {
          type: 'mysql',
          host,
          port,
          username,
          password,
          database,
          synchronize: false,
          autoLoadEntities: true,
          migrations: [migrations],
          logging: ['query', 'error'],
        };
      },
    }),
  ],
})
export class DbModule {}
