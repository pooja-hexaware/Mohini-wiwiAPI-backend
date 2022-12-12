import { Model } from 'mongoose';
import { toppingDetails, toppingDetailsDocument } from 'src/schemas/toppingdetails.schema';
export declare class toppingDetailsRepo {
    private readonly toppingdetailsModel;
    constructor(toppingdetailsModel: Model<toppingDetailsDocument>);
    create(data: any): Promise<toppingDetails>;
    findAll(): Promise<toppingDetails[]>;
    update(toppingdetailsId: any, data: any): Promise<toppingDetails>;
    delete(toppingdetailsId: any): Promise<toppingDetails>;
}
