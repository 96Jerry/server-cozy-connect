import { Work } from 'src/work/entities/work.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserRole } from '../enums/user-role.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  loginId: string;

  @Column()
  passwd: string;

  @Column({ enum: UserRole })
  role: UserRole;

  @ManyToMany(() => Work)
  @JoinTable()
  works: Work[];
}
