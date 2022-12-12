import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { storeDetails, storeDetailsDocument } from 'src/schemas/storedetails.schema';

@Injectable()
export class storeDetailsRepo {
    constructor(
        @InjectModel(storeDetails.name)
        private readonly storedetailsModel: Model<storeDetailsDocument>) {}

    async create(data): Promise<storeDetails> {
        return new this.storedetailsModel(data).save();
    }

    async findAll(): Promise<storeDetails[]> {
        return this.storedetailsModel.find({})
            .exec();
    }

    async update(storedetailsId, data): Promise<storeDetails> {
        const filter = { _id: storedetailsId };
        return this.storedetailsModel.findOneAndUpdate(filter, data);
    }

    async delete(storedetailsId): Promise<storeDetails> {
        const filter = { _id: storedetailsId };
        return this.storedetailsModel.findByIdAndDelete(storedetailsId);
        
    }
    async searchStoreById(storedetailsId): Promise<storeDetails> {
        const filter = { storeId: storedetailsId };
        return this.storedetailsModel.findOne(storedetailsId)}
}