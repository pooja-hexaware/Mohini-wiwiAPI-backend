import { Injectable } from '@nestjs/common';
import { menuDetailsRepo } from '../repository/menudetails.repo';
import { menuDetails } from '../schemas/menudetails.schema';

@Injectable()
export class menuDetailsService {
    constructor(
        private readonly menudetailsRepo: menuDetailsRepo
    ) { }

    async findAll(): Promise<menuDetails[]> {
        return this.menudetailsRepo.findAll();
    }

    async create(data): Promise<menuDetails> {
        data.createddate = new Date();
        return this.menudetailsRepo.create(data);
    }

    async update(menudetailsId, data): Promise<menuDetails> {
        return this.menudetailsRepo.update(menudetailsId, data);
    }

    async delete(menudetailsId): Promise<menuDetails> {
        return this.menudetailsRepo.delete(menudetailsId);
    }
}