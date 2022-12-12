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
exports.toppingDetailsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const toppingdetails_dto_dto_1 = require("../dto/toppingdetails-dto.dto");
const toppingdetails_service_1 = require("../services/toppingdetails.service");
let toppingDetailsController = class toppingDetailsController {
    constructor(toppingdetailsService) {
        this.toppingdetailsService = toppingdetailsService;
    }
    async create(toppingdetailsDto) {
        const res = this.toppingdetailsService.create(toppingdetailsDto);
        return res;
    }
    async findAll() {
        return this.toppingdetailsService.findAll();
    }
    update(id, toppingdetailsDto) {
        return this.toppingdetailsService.update(id, toppingdetailsDto);
    }
    delete(id) {
        return this.toppingdetailsService.delete(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("../schemas/toppingdetails.schema").toppingDetails }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [toppingdetails_dto_dto_1.toppingDetailsDto]),
    __metadata("design:returntype", Promise)
], toppingDetailsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("../schemas/toppingdetails.schema").toppingDetails] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], toppingDetailsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/:id'),
    openapi.ApiResponse({ status: 201, type: require("../schemas/toppingdetails.schema").toppingDetails }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, toppingdetails_dto_dto_1.toppingDetailsDto]),
    __metadata("design:returntype", void 0)
], toppingDetailsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    openapi.ApiResponse({ status: 200, type: require("../schemas/toppingdetails.schema").toppingDetails }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], toppingDetailsController.prototype, "delete", null);
toppingDetailsController = __decorate([
    (0, common_1.Controller)('toppingDetails'),
    __metadata("design:paramtypes", [toppingdetails_service_1.toppingDetailsService])
], toppingDetailsController);
exports.toppingDetailsController = toppingDetailsController;
//# sourceMappingURL=toppingdetails.controller.js.map