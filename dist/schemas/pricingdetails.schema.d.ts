import { Document } from 'mongoose';
export declare type pricingDetailsDocument = pricingDetails & Document;
export declare class pricingDetails {
    priceId: Number;
    price: Number;
    menuId: Number;
    storeId: Number;
}
export declare const pricingDetailsSchema: import("mongoose").Schema<Document<pricingDetails, any, any>, import("mongoose").Model<Document<pricingDetails, any, any>, any, any>, undefined, {}>;
