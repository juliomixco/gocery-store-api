import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  createProd() {
    const product = this.productRepository.create({
      description: 'test prod',
      isPublished: false,
      name: 'cocacola',
    });
    return this.productRepository.save(product);
  }
  getProducts() {
    return this.productRepository.find();
  }
}
