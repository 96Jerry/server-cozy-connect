import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Family {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
