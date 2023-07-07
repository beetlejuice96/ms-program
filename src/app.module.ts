import { Module } from '@nestjs/common';
import { ProgramModule } from './program/program.module';
import { DbModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { FileUploadModule } from './file-upload/file-upload.module';
import envConfig from './config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [envConfig],
      isGlobal: true,
    }),
    ProgramModule,
    DbModule,
    FileUploadModule,
  ],
})
export class AppModule {}
