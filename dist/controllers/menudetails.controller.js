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
exports.menuDetailsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const menudetails_dto_dto_1 = require("../dto/menudetails-dto.dto");
const menudetails_service_1 = require("../services/menudetails.service");
let menuDetailsController = class menuDetailsController {
    constructor(menudetailsService) {
        this.menudetailsService = menudetailsService;
    }
    async create(menudetailsDto) {
        const res = this.menudetailsService.create(menudetailsDto);
        return res;
    }
    async findAll() {
        return this.menudetailsService.findAll();
    }
    update(id, menudetailsDto) {
        return this.menudetailsService.update(id, menudetailsDto);
    }
    delete(id) {
        return this.menudetailsService.delete(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("../schemas/menudetails.schema").menuDetails }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [menudetails_dto_dto_1.menuDetailsDto]),
    __metadata("design:returntype", Promise)
], menuDetailsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("../schemas/menudetails.schema").menuDetails] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], menuDetailsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/:id'),
    openapi.ApiResponse({ status: 201, type: require("../schemas/menudetails.schema").menuDetails }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, menudetails_dto_dto_1.menuDetailsDto]),
    __metadata("design:returntype", void 0)
], menuDetailsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    openapi.ApiResponse({ status: 200, type: require("../schemas/menudetails.schema").menuDetails }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], menuDetailsController.prototype, "delete", null);
menuDetailsController = __decorate([
    (0, common_1.Controller)('menuDetails'),
    __metadata("design:paramtypes", [menudetails_service_1.menuDetailsService])
], menuDetailsController);
exports.menuDetailsController = menuDetailsController;
//# sourceMappingURL=menudetails.controller.js.map