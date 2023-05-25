import { Repository, EntityRepository } from 'typeorm';
import { SeniorCitizen } from '../entities/senior.entity';
import { NotFoundException } from '@nestjs/common';
import { CreateSeniorDto } from '../dtos/create-senior.dto';
import { UpdateSeniorDto } from '../dtos/update-senior.dto';

@EntityRepository(SeniorCitizen)
export class SeniorRepository extends Repository<SeniorCitizen> {
  

  async createSenior(createSeniorDto: CreateSeniorDto): Promise<SeniorCitizen> {
    const { firstName, lastName, age, ...otherFields } = createSeniorDto;
    const senior = this.create({
      firstName,
      lastName,
      age,
      ...otherFields,
    });
    return await this.save(senior);
  }

  async updateSenior(id: number, updateSeniorDto: UpdateSeniorDto): Promise<SeniorCitizen> {
    const senior = await this.findOne({where: { seniorId: id }});
    if (!senior) {
      throw new NotFoundException('Senior not found');
    }
    const { firstName, lastName, age, ...otherFields } = updateSeniorDto;
    senior.firstName = firstName || senior.firstName;
    senior.lastName = lastName || senior.lastName;
    senior.age = age || senior.age;
    Object.assign(senior, otherFields);
    return await this.save(senior);
  }

  async deleteSenior(id: number): Promise<void> {
    const result = await this.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Senior not found');
    }
  }

  async findSeniorById(id: number): Promise<SeniorCitizen> {
    const senior = await this.findOne({where: { seniorId: id }});
    if (!senior) {
      throw new NotFoundException('Senior not found');
    }
    return senior;
  }

  async findAllSeniors(): Promise<SeniorCitizen[]> {
    return await this.find();
  }
}
