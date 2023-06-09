import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloWorldController } from './hello-world/hello-world.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { datasourceConfig } from './config/typeorm-datasource.js';
import { CustomerModule } from './customer/customer.module';
import { OrderModule } from './order/order.module';
import { SupplierModule } from './supplier/supplier.module';
import { ProductModule } from './product/product.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [TypeOrmModule.forRoot(datasourceConfig), CustomerModule, OrderModule, SupplierModule, ProductModule, LocationModule],
  controllers: [AppController, HelloWorldController],
  providers: [AppService],
})
export class AppModule {}
