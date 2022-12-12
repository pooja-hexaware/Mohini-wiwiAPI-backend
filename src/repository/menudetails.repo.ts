import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { menuDetails, menuDetailsDocument } from 'src/schemas/menudetails.schema';

@Injectable()
export class menuDetailsRepo {
    constructor(
        @InjectModel(menuDetails.name)
        private readonly menudetailsModel: Model<menuDetailsDocument>) {}

    async create(data): Promise<menuDetails> {
        return new this.menudetailsModel(data).save();
    }

    async findAll(): Promise<menuDetails[]> {
        return this.menudetailsModel.find({})
            .exec();
    }

    async update(menudetailsId, data): Promise<menuDetails> {
        const filter = { _id: menudetailsId };
        return this.menudetailsModel.findOneAndUpdate(filter, data);
    }

    async delete(menudetailsId): Promise<menuDetails> {
        const filter = { _id: menudetailsId };
        return this.menudetailsModel.findByIdAndDelete(menudetailsId);
    }
}