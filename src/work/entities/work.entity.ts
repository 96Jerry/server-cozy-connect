import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Work {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
