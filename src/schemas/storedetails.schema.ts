import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type storeDetailsDocument = storeDetails & Document;

@Schema()
export class storeDetails {
   
   @Prop()
   storeId: Number; 
   @Prop()
   storeName: string; 
   @Prop({ type: Array })
   menuId: []; 
   @Prop({ type: Object })
   storeLocation: {Latitude:string,Longitude:string,Address:string,City:string,Zipcode:string}; 
     
   
}

export const storeDetailsSchema = SchemaFactory.createForClass(storeDetails);



