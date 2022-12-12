import { Injectable } from '@nestjs/common';
import { toppingDetailsRepo } from '../repository/toppingdetails.repo';
import { toppingDetails } from '../schemas/toppingdetails.schema';

@Injectable()
export class toppingDetailsService {
    constructor(
        private readonly toppingdetailsRepo: toppingDetailsRepo
    ) { }

    async findAll(): Promise<toppingDetails[]> {
        return this.toppingdetailsRepo.findAll();
    }

    async create(data): Promise<toppingDetails> {
        data.createddate = new Date();
        return this.toppingdetailsRepo.create(data);
    }

    async update(toppingdetailsId, data): Promise<toppingDetails> {
        return this.toppingdetailsRepo.update(toppingdetailsId, data);
    }

    async delete(toppingdetailsId): Promise<toppingDetails> {
        return this.toppingdetailsRepo.delete(toppingdetailsId);
    }
}