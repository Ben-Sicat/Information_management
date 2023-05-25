import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { SeniorCitizen } from '../entities/senior.entity';
import { SeniorCitizenService } from '../services/senior.service';

@Controller('senior-citizens')
export class SeniorCitizenController {
  constructor(private seniorCitizenService: SeniorCitizenService) {}

  @Get()
  async findAll(): Promise<SeniorCitizen[]> {
    return this.seniorCitizenService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<SeniorCitizen> {
    return this.seniorCitizenService.findById(id);
  }

  @Post()
  async create(@Body() seniorCitizen: SeniorCitizen): Promise<SeniorCitizen> {
    return this.seniorCitizenService.create(seniorCitizen);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() seniorCitizen: SeniorCitizen,
  ): Promise<SeniorCitizen> {
    return this.seniorCitizenService.update(id, seniorCitizen);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.seniorCitizenService.delete(id);
  }
}
