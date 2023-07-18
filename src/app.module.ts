import { Module } from '@nestjs/common';
import { ProgramModule } from './program/program.module';
import { DbModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { FileUploadModule } from './file-upload/file-upload.module';
import envConfig from './config/env.config';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [envConfig],
      isGlobal: true,
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        customProps: () => ({
          context: 'HTTP',
        }),
        // transport: {
        //   target: 'pino-pretty',
        //   options: {
        //     singleLine: true,
        //   },
        // },
      },
    }),
    ProgramModule,
    DbModule,
    FileUploadModule,
  ],
})
export class AppModule {}
