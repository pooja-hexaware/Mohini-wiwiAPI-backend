import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { toppingDetails, toppingDetailsDocument } from 'src/schemas/toppingdetails.schema';

@Injectable()
export class toppingDetailsRepo {
    constructor(
        @InjectModel(toppingDetails.name)
        private readonly toppingdetailsModel: Model<toppingDetailsDocument>) {}

    async create(data): Promise<toppingDetails> {
        return new this.toppingdetailsModel(data).save();
    }

    async findAll(): Promise<toppingDetails[]> {
        return this.toppingdetailsModel.find({})
            .exec();
    }

    async update(toppingdetailsId, data): Promise<toppingDetails> {
        const filter = { _id: toppingdetailsId };
        return this.toppingdetailsModel.findOneAndUpdate(filter, data);
    }

    async delete(toppingdetailsId): Promise<toppingDetails> {
        const filter = { _id: toppingdetailsId };
        return this.toppingdetailsModel.findByIdAndDelete(toppingdetailsId);
    }
}