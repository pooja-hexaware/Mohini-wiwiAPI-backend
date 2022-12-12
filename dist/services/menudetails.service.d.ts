import { menuDetailsRepo } from '../repository/menudetails.repo';
import { menuDetails } from '../schemas/menudetails.schema';
export declare class menuDetailsService {
    private readonly menudetailsRepo;
    constructor(menudetailsRepo: menuDetailsRepo);
    findAll(): Promise<menuDetails[]>;
    create(data: any): Promise<menuDetails>;
    update(menudetailsId: any, data: any): Promise<menuDetails>;
    delete(menudetailsId: any): Promise<menuDetails>;
}
