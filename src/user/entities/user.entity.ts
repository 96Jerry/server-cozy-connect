import { Work } from 'src/work/entities/work.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  loginId: string;

  @Column()
  passwd: string;

  @ManyToMany(() => Work)
  @JoinTable()
  works: Work[];
}
