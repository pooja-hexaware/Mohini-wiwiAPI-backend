import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type menuDetailsDocument = menuDetails & Document;

@Schema()
export class menuDetails {
   
   @Prop()
   menuId: Number; 
   
   @Prop()
   menuName: string; 
   
   @Prop()
   menuDescription: string; 
   
   @Prop()
   storeId: Number; 


   @Prop()
   price: string; 
}

export const menuDetailsSchema = SchemaFactory.createForClass(menuDetails);