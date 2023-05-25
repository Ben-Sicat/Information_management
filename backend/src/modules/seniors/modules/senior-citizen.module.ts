import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeniorCitizenController } from '../controllers/senior.controller';
import { SeniorCitizenService } from '../services/senior.service';
import { SeniorRepository } from '../repositories/senior.repository';
import { SeniorCitizen } from '../entities/senior.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SeniorCitizen, SeniorRepository])],
  controllers: [SeniorCitizenController],
  providers: [SeniorCitizenService],
})
export class SeniorCitizenModule {}
