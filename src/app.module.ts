import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { AppService } from './services/app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'ds051843.mlab.com',
      port: 51843,
      username: 'grocery',
      password: 'grocery123',
      database: 'grocery-store',
      entities: [Product],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Product]),
  ],
  providers: [AppService],
  controllers: [AppController],
  exports: [TypeOrmModule],
})
export class AppModule {}
