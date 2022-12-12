import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type toppingDetailsDocument = toppingDetails & Document;

@Schema()
export class toppingDetails {
   
   @Prop()
   toppingId: Number; 
   
   @Prop()
   toppings: string; 
   
   @Prop()
   menuId: Number; 
   
   @Prop()
   priceId: Number; 
   
}

export const toppingDetailsSchema = SchemaFactory.createForClass(toppingDetails);