import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from '../typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Senior } from './modules/seniors/entities/senior.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
