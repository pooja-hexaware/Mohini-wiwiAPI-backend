import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type pricingDetailsDocument = pricingDetails & Document;

@Schema()
export class pricingDetails {
   
   @Prop()
   priceId: Number; 
   
   @Prop()
   price: Number; 
   
   @Prop()
   menuId: Number; 
   
   @Prop()
   storeId: Number; 
   
}

export const pricingDetailsSchema = SchemaFactory.createForClass(pricingDetails);