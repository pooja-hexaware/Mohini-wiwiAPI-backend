"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuDetailsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const menudetails_controller_1 = require("../controllers/menudetails.controller");
const menudetails_service_1 = require("../services/menudetails.service");
const menudetails_repo_1 = require("../repository/menudetails.repo");
const menudetails_schema_1 = require("../schemas/menudetails.schema");
let menuDetailsModule = class menuDetailsModule {
};
menuDetailsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: menudetails_schema_1.menuDetails.name, schema: menudetails_schema_1.menuDetailsSchema }])
        ],
        controllers: [menudetails_controller_1.menuDetailsController],
        providers: [menudetails_service_1.menuDetailsService, menudetails_repo_1.menuDetailsRepo],
        exports: [menudetails_service_1.menuDetailsService, menudetails_repo_1.menuDetailsRepo]
    })
], menuDetailsModule);
exports.menuDetailsModule = menuDetailsModule;
//# sourceMappingURL=menudetails.module.js.map