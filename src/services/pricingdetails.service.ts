import { Injectable } from '@nestjs/common';
import { pricingDetailsRepo } from '../repository/pricingdetails.repo';
import { pricingDetails } from '../schemas/pricingdetails.schema';

@Injectable()
export class pricingDetailsService {
    constructor(
        private readonly pricingdetailsRepo: pricingDetailsRepo
    ) { }

    async findAll(): Promise<pricingDetails[]> {
        return this.pricingdetailsRepo.findAll();
    }

    async create(data): Promise<pricingDetails> {
        data.createddate = new Date();
        return this.pricingdetailsRepo.create(data);
    }

    async update(pricingdetailsId, data): Promise<pricingDetails> {
        return this.pricingdetailsRepo.update(pricingdetailsId, data);
    }

    async delete(pricingdetailsId): Promise<pricingDetails> {
        return this.pricingdetailsRepo.delete(pricingdetailsId);
    }
}