"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toppingDetailsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const toppingdetails_controller_1 = require("../controllers/toppingdetails.controller");
const toppingdetails_service_1 = require("../services/toppingdetails.service");
const toppingdetails_repo_1 = require("../repository/toppingdetails.repo");
const toppingdetails_schema_1 = require("../schemas/toppingdetails.schema");
let toppingDetailsModule = class toppingDetailsModule {
};
toppingDetailsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: toppingdetails_schema_1.toppingDetails.name, schema: toppingdetails_schema_1.toppingDetailsSchema }])
        ],
        controllers: [toppingdetails_controller_1.toppingDetailsController],
        providers: [toppingdetails_service_1.toppingDetailsService, toppingdetails_repo_1.toppingDetailsRepo],
        exports: [toppingdetails_service_1.toppingDetailsService, toppingdetails_repo_1.toppingDetailsRepo]
    })
], toppingDetailsModule);
exports.toppingDetailsModule = toppingDetailsModule;
//# sourceMappingURL=toppingdetails.module.js.map