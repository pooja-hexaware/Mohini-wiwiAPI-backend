import { pricingDetailsDto } from '../dto/pricingdetails-dto.dto';
import { pricingDetailsService } from '../services/pricingdetails.service';
export declare class pricingDetailsController {
    private readonly pricingdetailsService;
    constructor(pricingdetailsService: pricingDetailsService);
    create(pricingdetailsDto: pricingDetailsDto): Promise<import("../schemas/pricingdetails.schema").pricingDetails>;
    findAll(): Promise<import("../schemas/pricingdetails.schema").pricingDetails[]>;
    update(id: string, pricingdetailsDto: pricingDetailsDto): Promise<import("../schemas/pricingdetails.schema").pricingDetails>;
    delete(id: string): Promise<import("../schemas/pricingdetails.schema").pricingDetails>;
}
