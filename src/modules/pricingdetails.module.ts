import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { pricingDetailsController } from '../controllers/pricingdetails.controller';
import { pricingDetailsService } from '../services/pricingdetails.service';
import { pricingDetailsRepo } from '../repository/pricingdetails.repo';
import { pricingDetails, pricingDetailsSchema } from '../schemas/pricingdetails.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: pricingDetails.name, schema: pricingDetailsSchema }])
    ],
    controllers: [pricingDetailsController],
    providers: [pricingDetailsService, pricingDetailsRepo],
    exports: [pricingDetailsService, pricingDetailsRepo]
  })
  export class pricingDetailsModule { }