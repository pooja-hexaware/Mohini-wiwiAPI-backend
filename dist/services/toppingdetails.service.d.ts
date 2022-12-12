import { toppingDetailsRepo } from '../repository/toppingdetails.repo';
import { toppingDetails } from '../schemas/toppingdetails.schema';
export declare class toppingDetailsService {
    private readonly toppingdetailsRepo;
    constructor(toppingdetailsRepo: toppingDetailsRepo);
    findAll(): Promise<toppingDetails[]>;
    create(data: any): Promise<toppingDetails>;
    update(toppingdetailsId: any, data: any): Promise<toppingDetails>;
    delete(toppingdetailsId: any): Promise<toppingDetails>;
}
