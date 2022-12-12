import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { toppingDetailsController } from '../controllers/toppingdetails.controller';
import { toppingDetailsService } from '../services/toppingdetails.service';
import { toppingDetailsRepo } from '../repository/toppingdetails.repo';
import { toppingDetails, toppingDetailsSchema } from '../schemas/toppingdetails.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: toppingDetails.name, schema: toppingDetailsSchema }])
    ],
    controllers: [toppingDetailsController],
    providers: [toppingDetailsService, toppingDetailsRepo],
    exports: [toppingDetailsService, toppingDetailsRepo]
  })
  export class toppingDetailsModule { }