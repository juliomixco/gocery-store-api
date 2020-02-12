import { Entity, Column, ObjectIdColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Review {
  @ObjectIdColumn()
  id: number;

  @Column('text')
  comment: string;

  @Column('int')
  rating: number;

  @ManyToOne(
    () => User,
    user => user.productReviews,
  )
  user: User;
}
