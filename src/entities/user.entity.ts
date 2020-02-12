import { Entity, Column, ObjectIdColumn, ManyToOne, OneToMany } from 'typeorm';
import { ProductLike } from './like.entity';
import { Review } from './review.entity';

@Entity()
export class User {
  @ObjectIdColumn()
  id: number;

  @Column({ length: 100 })
  firstName: string;

  @Column({ length: 100 })
  lastName: string;

  @Column({ length: 300 })
  email: string;

  @OneToMany(
    () => ProductLike,
    like => like.user,
  )
  likedProducts: ProductLike[];

  @OneToMany(
    () => Review,
    review => review.user,
  )
  productReviews: Review[];
}
