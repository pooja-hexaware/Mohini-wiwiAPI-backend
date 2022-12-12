import { Model } from 'mongoose';
import { pricingDetails, pricingDetailsDocument } from 'src/schemas/pricingdetails.schema';
export declare class pricingDetailsRepo {
    private readonly pricingdetailsModel;
    constructor(pricingdetailsModel: Model<pricingDetailsDocument>);
    create(data: any): Promise<pricingDetails>;
    findAll(): Promise<pricingDetails[]>;
    update(pricingdetailsId: any, data: any): Promise<pricingDetails>;
    delete(pricingdetailsId: any): Promise<pricingDetails>;
}
