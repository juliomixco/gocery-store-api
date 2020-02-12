import { Entity, Column, ObjectIdColumn, ManyToOne, OneToMany } from 'typeorm';
import { ProductLike } from './like.entity';

@Entity()
export class Product {
  @ObjectIdColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column('int')
  views: number;

  @Column()
  isPublished: boolean;

  @OneToMany(
    () => ProductLike,
    like => like.product,
  )
  likes: ProductLike[];
}
