import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Product } from './product.entity';
import { User } from './user.entity';

@Entity()
export class ProductLike {
  @PrimaryColumn()
  @ManyToOne(
    () => Product,
    product => product.likes,
  )
  product: Product;

  @PrimaryColumn()
  @ManyToOne(
    () => User,
    user => user.likedProducts,
  )
  user: User;

  @Column()
  liked: boolean;
}
