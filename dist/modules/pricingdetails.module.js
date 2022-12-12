"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pricingDetailsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const pricingdetails_controller_1 = require("../controllers/pricingdetails.controller");
const pricingdetails_service_1 = require("../services/pricingdetails.service");
const pricingdetails_repo_1 = require("../repository/pricingdetails.repo");
const pricingdetails_schema_1 = require("../schemas/pricingdetails.schema");
let pricingDetailsModule = class pricingDetailsModule {
};
pricingDetailsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: pricingdetails_schema_1.pricingDetails.name, schema: pricingdetails_schema_1.pricingDetailsSchema }])
        ],
        controllers: [pricingdetails_controller_1.pricingDetailsController],
        providers: [pricingdetails_service_1.pricingDetailsService, pricingdetails_repo_1.pricingDetailsRepo],
        exports: [pricingdetails_service_1.pricingDetailsService, pricingdetails_repo_1.pricingDetailsRepo]
    })
], pricingDetailsModule);
exports.pricingDetailsModule = pricingDetailsModule;
//# sourceMappingURL=pricingdetails.module.js.map