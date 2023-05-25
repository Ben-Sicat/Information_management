import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeniorCitizenController } from '../src/modules/seniors/controllers/senior.controller';
import { SeniorCitizenModule } from '../src/modules/seniors/modules/senior-citizen.module';
import { SeniorCitizen } from '../src/modules/seniors/entities/senior.entity';
import { ArchiveSeniorCitizen } from '../src/modules/seniors/entities/archive.entities';
import { SeniorCitizenService } from '../src/modules/seniors/services/senior.service';
import { ImageService } from '../src/modules/seniors/services/image.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([SeniorCitizen, ArchiveSeniorCitizen]),
    SeniorCitizenModule,
  ],
  controllers: [AppController, SeniorCitizenController],
  providers: [AppService, SeniorCitizenService, ImageService],
})
export class AppModule {}
