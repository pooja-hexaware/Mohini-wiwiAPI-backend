import { pricingDetailsRepo } from '../repository/pricingdetails.repo';
import { pricingDetails } from '../schemas/pricingdetails.schema';
export declare class pricingDetailsService {
    private readonly pricingdetailsRepo;
    constructor(pricingdetailsRepo: pricingDetailsRepo);
    findAll(): Promise<pricingDetails[]>;
    create(data: any): Promise<pricingDetails>;
    update(pricingdetailsId: any, data: any): Promise<pricingDetails>;
    delete(pricingdetailsId: any): Promise<pricingDetails>;
}
