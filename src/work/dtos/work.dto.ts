import { Work } from '../entities/work.entity';
import { PickType } from '@nestjs/mapped-types';

export class WorkDto extends PickType(Work, ['id']) {}
