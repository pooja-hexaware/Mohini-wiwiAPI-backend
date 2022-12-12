"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pricingDetailsRepo = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const pricingdetails_schema_1 = require("../schemas/pricingdetails.schema");
let pricingDetailsRepo = class pricingDetailsRepo {
    constructor(pricingdetailsModel) {
        this.pricingdetailsModel = pricingdetailsModel;
    }
    async create(data) {
        return new this.pricingdetailsModel(data).save();
    }
    async findAll() {
        return this.pricingdetailsModel.find({})
            .exec();
    }
    async update(pricingdetailsId, data) {
        const filter = { _id: pricingdetailsId };
        return this.pricingdetailsModel.findOneAndUpdate(filter, data);
    }
    async delete(pricingdetailsId) {
        const filter = { _id: pricingdetailsId };
        return this.pricingdetailsModel.findByIdAndDelete(pricingdetailsId);
    }
};
pricingDetailsRepo = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(pricingdetails_schema_1.pricingDetails.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], pricingDetailsRepo);
exports.pricingDetailsRepo = pricingDetailsRepo;
//# sourceMappingURL=pricingdetails.repo.js.map