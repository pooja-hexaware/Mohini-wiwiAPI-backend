import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { pricingDetails, pricingDetailsDocument } from 'src/schemas/pricingdetails.schema';

@Injectable()
export class pricingDetailsRepo {
    constructor(
        @InjectModel(pricingDetails.name)
        private readonly pricingdetailsModel: Model<pricingDetailsDocument>) {}

    async create(data): Promise<pricingDetails> {
        return new this.pricingdetailsModel(data).save();
    }

    async findAll(): Promise<pricingDetails[]> {
        return this.pricingdetailsModel.find({})
            .exec();
    }

    async update(pricingdetailsId, data): Promise<pricingDetails> {
        const filter = { _id: pricingdetailsId };
        return this.pricingdetailsModel.findOneAndUpdate(filter, data);
    }

    async delete(pricingdetailsId): Promise<pricingDetails> {
        const filter = { _id: pricingdetailsId };
        return this.pricingdetailsModel.findByIdAndDelete(pricingdetailsId);
    }
}