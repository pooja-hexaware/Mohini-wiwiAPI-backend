import { Document } from 'mongoose';
export declare type menuDetailsDocument = menuDetails & Document;
export declare class menuDetails {
    menuId: Number;
    menuName: string;
    menuDescription: string;
    storeId: Number;
    price: string;
}
export declare const menuDetailsSchema: import("mongoose").Schema<Document<menuDetails, any, any>, import("mongoose").Model<Document<menuDetails, any, any>, any, any>, undefined, {}>;
