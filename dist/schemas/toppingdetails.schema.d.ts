import { Document } from 'mongoose';
export declare type toppingDetailsDocument = toppingDetails & Document;
export declare class toppingDetails {
    toppingId: Number;
    toppings: string;
    menuId: Number;
    priceId: Number;
}
export declare const toppingDetailsSchema: import("mongoose").Schema<Document<toppingDetails, any, any>, import("mongoose").Model<Document<toppingDetails, any, any>, any, any>, undefined, {}>;
