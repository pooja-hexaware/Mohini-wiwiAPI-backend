import { Document } from 'mongoose';
export declare type storeDetailsDocument = storeDetails & Document;
export declare class storeDetails {
    storeId: Number;
    storeName: string;
    menuId: [];
    storeLocation: {
        Latitude: string;
        Longitude: string;
        Address: string;
        City: string;
        Zipcode: string;
    };
}
export declare const storeDetailsSchema: import("mongoose").Schema<Document<storeDetails, any, any>, import("mongoose").Model<Document<storeDetails, any, any>, any, any>, undefined, {}>;
