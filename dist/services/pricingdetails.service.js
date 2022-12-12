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
Object.defineProperty(exports, "__esModule", { value: true });
exports.pricingDetailsService = void 0;
const common_1 = require("@nestjs/common");
const pricingdetails_repo_1 = require("../repository/pricingdetails.repo");
let pricingDetailsService = class pricingDetailsService {
    constructor(pricingdetailsRepo) {
        this.pricingdetailsRepo = pricingdetailsRepo;
    }
    async findAll() {
        return this.pricingdetailsRepo.findAll();
    }
    async create(data) {
        data.createddate = new Date();
        return this.pricingdetailsRepo.create(data);
    }
    async update(pricingdetailsId, data) {
        return this.pricingdetailsRepo.update(pricingdetailsId, data);
    }
    async delete(pricingdetailsId) {
        return this.pricingdetailsRepo.delete(pricingdetailsId);
    }
};
pricingDetailsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [pricingdetails_repo_1.pricingDetailsRepo])
], pricingDetailsService);
exports.pricingDetailsService = pricingDetailsService;
//# sourceMappingURL=pricingdetails.service.js.map