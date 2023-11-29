import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserModule,ProductModule,],
  controllers: [],
  //MongooseModule.forRoot('mongose_url')
  providers: [],
})
export class AppModule {}
