import { Model } from 'mongoose';
import { menuDetails, menuDetailsDocument } from 'src/schemas/menudetails.schema';
export declare class menuDetailsRepo {
    private readonly menudetailsModel;
    constructor(menudetailsModel: Model<menuDetailsDocument>);
    create(data: any): Promise<menuDetails>;
    findAll(): Promise<menuDetails[]>;
    update(menudetailsId: any, data: any): Promise<menuDetails>;
    delete(menudetailsId: any): Promise<menuDetails>;
}
