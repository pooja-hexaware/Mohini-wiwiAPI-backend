import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { menuDetailsController } from '../controllers/menudetails.controller';
import { menuDetailsService } from '../services/menudetails.service';
import { menuDetailsRepo } from '../repository/menudetails.repo';
import { menuDetails, menuDetailsSchema } from '../schemas/menudetails.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: menuDetails.name, schema: menuDetailsSchema }])
    ],
    controllers: [menuDetailsController],
    providers: [menuDetailsService, menuDetailsRepo],
    exports: [menuDetailsService, menuDetailsRepo]
  })
  export class menuDetailsModule { }