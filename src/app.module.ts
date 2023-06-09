import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customer/customer.module';
import { OrderModule } from './order/order.module';
import { SupplierModule } from './supplier/supplier.module';
import { ProductModule } from './product/product.module';
import { LocationModule } from './location/location.module';
import { ConfigModule } from '@nestjs/config';
import { datasourceConfig } from './config/typeorm-datasource';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
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
  controllers: [],
  providers: [],
})
export class AppModule {}
