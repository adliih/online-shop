import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloWorldController } from './hello-world/hello-world.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customer/customer.module';
import { OrderModule } from './order/order.module';
import { SupplierModule } from './supplier/supplier.module';
import { ProductModule } from './product/product.module';
import { LocationModule } from './location/location.module';
import { ConfigModule } from '@nestjs/config';
import { datasourceConfig } from './config/typeorm-datasource';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => datasourceConfig(),
    }),
    CustomerModule,
    OrderModule,
    SupplierModule,
    ProductModule,
    LocationModule,
  ],
  controllers: [AppController, HelloWorldController],
  providers: [AppService],
})
export class AppModule {}
