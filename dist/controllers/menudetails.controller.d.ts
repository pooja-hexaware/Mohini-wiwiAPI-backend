import { menuDetailsDto } from '../dto/menudetails-dto.dto';
import { menuDetailsService } from '../services/menudetails.service';
export declare class menuDetailsController {
    private readonly menudetailsService;
    constructor(menudetailsService: menuDetailsService);
    create(menudetailsDto: menuDetailsDto): Promise<import("../schemas/menudetails.schema").menuDetails>;
    findAll(): Promise<import("../schemas/menudetails.schema").menuDetails[]>;
    update(id: string, menudetailsDto: menuDetailsDto): Promise<import("../schemas/menudetails.schema").menuDetails>;
    delete(id: string): Promise<import("../schemas/menudetails.schema").menuDetails>;
}
