import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { storeDetailsController } from '../controllers/storedetails.controller';
import { storeDetailsService } from '../services/storedetails.service';
import { storeDetailsRepo } from '../repository/storedetails.repo';
import { storeDetails, storeDetailsSchema } from '../schemas/storedetails.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: storeDetails.name, schema: storeDetailsSchema }])
    ],
    controllers: [storeDetailsController],
    providers: [storeDetailsService, storeDetailsRepo],
    exports: [storeDetailsService, storeDetailsRepo]
  })
  export class storeDetailsModule { }