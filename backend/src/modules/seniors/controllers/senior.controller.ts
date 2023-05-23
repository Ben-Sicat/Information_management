import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Senior } from '../entities/senior.entity';
import { CreateSeniorDto } from '../dtos/create-senior.dto';
import { UpdateSeniorDto } from '../dtos/update-senior.dto';

@Injectable()
export class SeniorService {
  constructor(
    @InjectRepository(Senior)
    private readonly seniorRepository: Repository<Senior>,
  ) {}

  async getAllSeniors(): Promise<Senior[]> {
    return this.seniorRepository.find();
  }

  async getSeniorById(id: number): Promise<Senior> {
    const senior = await this.seniorRepository.findOne({where: { seniorId: id }});
    if (!senior) {
      throw new NotFoundException('Senior not found');
    }
    return senior;
  }

  async createSenior(createSeniorDto: CreateSeniorDto): Promise<Senior> {
    const senior = this.seniorRepository.create(createSeniorDto);
    return this.seniorRepository.save(senior);
  }

  async updateSenior(id: number, updateSeniorDto: UpdateSeniorDto): Promise<Senior> {
    const senior = await this.getSeniorById(id);
    const updatedSenior = { ...senior, ...updateSeniorDto };
    return this.seniorRepository.save(updatedSenior);
  }

  async deleteSenior(id: number): Promise<void> {
    const senior = await this.getSeniorById(id);
    await this.seniorRepository.remove(senior);
  }
}
