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
exports.menuDetailsService = void 0;
const common_1 = require("@nestjs/common");
const menudetails_repo_1 = require("../repository/menudetails.repo");
let menuDetailsService = class menuDetailsService {
    constructor(menudetailsRepo) {
        this.menudetailsRepo = menudetailsRepo;
    }
    async findAll() {
        return this.menudetailsRepo.findAll();
    }
    async create(data) {
        data.createddate = new Date();
        return this.menudetailsRepo.create(data);
    }
    async update(menudetailsId, data) {
        return this.menudetailsRepo.update(menudetailsId, data);
    }
    async delete(menudetailsId) {
        return this.menudetailsRepo.delete(menudetailsId);
    }
};
menuDetailsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [menudetails_repo_1.menuDetailsRepo])
], menuDetailsService);
exports.menuDetailsService = menuDetailsService;
//# sourceMappingURL=menudetails.service.js.map