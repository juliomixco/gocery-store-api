import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from 'src/services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('products')
  getProduct() {
    return this.appService.getProducts();
  }

  @Post('products')
  createProduct() {
    return this.appService.createProd();
  }
}
