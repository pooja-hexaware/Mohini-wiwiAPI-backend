import { storeDetailsDto } from '../dto/storedetails-dto.dto';
import { storeDetailsService } from '../services/storedetails.service';
export declare class storeDetailsController {
    private readonly storedetailsService;
    constructor(storedetailsService: storeDetailsService);
    create(storedetailsDto: storeDetailsDto): Promise<import("../schemas/storedetails.schema").storeDetails>;
    findAll(): Promise<import("../schemas/storedetails.schema").storeDetails[]>;
    update(id: string, storedetailsDto: storeDetailsDto): Promise<import("../schemas/storedetails.schema").storeDetails>;
    delete(id: string): Promise<import("../schemas/storedetails.schema").storeDetails>;
}
