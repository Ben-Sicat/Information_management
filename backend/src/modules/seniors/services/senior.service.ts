import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SeniorCitizen } from '../entities/senior.entity';
import { ArchiveSeniorCitizen } from '../entities/archive.entities';
import { ImageService } from './image.service';

@Injectable()
export class SeniorCitizenService {
  constructor(
    @InjectRepository(SeniorCitizen)
    private seniorCitizenRepository: Repository<SeniorCitizen>,
    private archiveSeniorCitizenRepository: Repository<ArchiveSeniorCitizen>,
    private imageService: ImageService,
  ) {}

  async findAll(): Promise<SeniorCitizen[]> {
    return this.seniorCitizenRepository.find();
  }

  async findById(id: number): Promise<SeniorCitizen> {
    return this.seniorCitizenRepository.findOne(id);
  }

  async create(seniorCitizen: SeniorCitizen): Promise<SeniorCitizen> {
    return this.seniorCitizenRepository.save(seniorCitizen);
  }

  async update(id: number, seniorCitizen: SeniorCitizen): Promise<SeniorCitizen> {
    const existingSeniorCitizen = await this.seniorCitizenRepository.findOne(id);

    if (seniorCitizen.status !== existingSeniorCitizen.status) {
      if (seniorCitizen.status === 'deceased') {
        await this.pushImageForDeceased(seniorCitizen);
      } else {
        await this.handleOtherStatusUpdates(existingSeniorCitizen, seniorCitizen);
      }
    }

    await this.seniorCitizenRepository.update(id, seniorCitizen);
    return this.seniorCitizenRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    const seniorCitizen = await this.seniorCitizenRepository.findOne(id);

    await this.pushToArchive(seniorCitizen);
    await this.seniorCitizenRepository.delete(id);
  }

  private async pushImageForDeceased(seniorCitizen: SeniorCitizen): Promise<void> {
    const imagePath = await this.imageService.generateImage(seniorCitizen);
    console.log(`Image for deceased senior citizen ${seniorCitizen.seniorId} pushed: ${imagePath}`);
  }

  private async handleOtherStatusUpdates(existingSeniorCitizen: SeniorCitizen, seniorCitizen: SeniorCitizen): Promise<void> {
      console.log(`Status updated for senior citizen ${seniorCitizen.seniorId}: ${seniorCitizen.status}`);
  }

  private async pushToArchive(seniorCitizen: SeniorCitizen): Promise<void> {
    const archiveData: ArchiveSeniorCitizen = { ...seniorCitizen, archivedAt: new Date() };
    await this.archiveSeniorCitizenRepository.save(archiveData);
    console.log(`Senior citizen ${seniorCitizen.seniorId} archived.`);
  }
}
