import { storeDetailsRepo } from '../repository/storedetails.repo';
import { storeDetails } from '../schemas/storedetails.schema';
export declare class storeDetailsService {
    private readonly storedetailsRepo;
    constructor(storedetailsRepo: storeDetailsRepo);
    findAll(): Promise<storeDetails[]>;
    create(data: any): Promise<storeDetails>;
    update(storedetailsId: any, data: any): Promise<storeDetails>;
    delete(storedetailsId: any): Promise<storeDetails>;
}
