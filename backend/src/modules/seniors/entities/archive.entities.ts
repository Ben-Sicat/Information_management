// src/modules/seniors/entities/senior.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ArchiveSeniorCitizen {
  @PrimaryGeneratedColumn()
  seniorId: number;

  @Column({ type: 'int' })
  seniorNumber: number;

  @Column({ length: 50 })
  firstName: string;

  @Column({ length: 50 })
  middleName: string;

  @Column({ length: 50 })
  lastName: string;

  @Column({ length: 50, nullable: true })
  suffix: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ length: 50 })
  birthMonth: string;

  @Column({ type: 'int' })
  birthDay: number;

  @Column({ type: 'int' })
  birthYear: number;

  @Column({ length: 50 })
  districtName: string;

  @Column({ length: 50 })
  zone: string;

  @Column({ length: 10 })
  gender: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 20 })
  benefits: string;

  @Column({ length: 50, nullable: true })
  voter: string;

  @Column({ length: 50, nullable: true })
  status: string;

  @Column({ length: 50, nullable: true })
  civilStatus: string;

  @Column({ length: 50, nullable: true })
  buildingNumber: string;

  @Column({ length: 50, nullable: true })
  phoneNumber: string;
  @Column()
  archivedAt: Date;

}
