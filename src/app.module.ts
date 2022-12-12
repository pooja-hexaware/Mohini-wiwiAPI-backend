import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { storeDetailsModule } from "./modules/storedetails.module";
import { menuDetailsModule } from "./modules/menudetails.module";
//import { pricingDetailsModule } from "./modules/pricingdetails.module";
import { toppingDetailsModule } from "./modules/toppingdetails.module";

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), MongooseModule.forRoot(process.env.MONGODB_URL, {
    autoCreate: true,
  }),
        storeDetailsModule,
        menuDetailsModule,
      //  pricingDetailsModule,
        toppingDetailsModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
