import { Model } from 'mongoose';
import { storeDetails, storeDetailsDocument } from 'src/schemas/storedetails.schema';
export declare class storeDetailsRepo {
    private readonly storedetailsModel;
    constructor(storedetailsModel: Model<storeDetailsDocument>);
    create(data: any): Promise<storeDetails>;
    findAll(): Promise<storeDetails[]>;
    update(storedetailsId: any, data: any): Promise<storeDetails>;
    delete(storedetailsId: any): Promise<storeDetails>;
    searchStoreById(storedetailsId: any): Promise<storeDetails>;
}
