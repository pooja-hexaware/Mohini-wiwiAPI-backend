import { Injectable } from '@nestjs/common';
import { storeDetailsRepo } from '../repository/storedetails.repo';
import { storeDetails } from '../schemas/storedetails.schema';

@Injectable()
export class storeDetailsService {
    constructor(
        private readonly storedetailsRepo: storeDetailsRepo
    ) { }

    async findAll(): Promise<storeDetails[]> {
        return this.storedetailsRepo.findAll();
    }

    async create(data): Promise<storeDetails> {
        data.createddate = new Date();
        return this.storedetailsRepo.create(data);
    }

    async update(storedetailsId, data): Promise<storeDetails> {
        return this.storedetailsRepo.update(storedetailsId, data);
    }

    async delete(storedetailsId): Promise<storeDetails> {
        return this.storedetailsRepo.delete(storedetailsId);
    }
}