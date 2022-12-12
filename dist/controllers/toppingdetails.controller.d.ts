import { toppingDetailsDto } from '../dto/toppingdetails-dto.dto';
import { toppingDetailsService } from '../services/toppingdetails.service';
export declare class toppingDetailsController {
    private readonly toppingdetailsService;
    constructor(toppingdetailsService: toppingDetailsService);
    create(toppingdetailsDto: toppingDetailsDto): Promise<import("../schemas/toppingdetails.schema").toppingDetails>;
    findAll(): Promise<import("../schemas/toppingdetails.schema").toppingDetails[]>;
    update(id: string, toppingdetailsDto: toppingDetailsDto): Promise<import("../schemas/toppingdetails.schema").toppingDetails>;
    delete(id: string): Promise<import("../schemas/toppingdetails.schema").toppingDetails>;
}
