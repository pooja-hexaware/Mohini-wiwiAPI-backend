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
exports.pricingDetailsSchema = exports.pricingDetails = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let pricingDetails = class pricingDetails {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], pricingDetails.prototype, "priceId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], pricingDetails.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], pricingDetails.prototype, "menuId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], pricingDetails.prototype, "storeId", void 0);
pricingDetails = __decorate([
    (0, mongoose_1.Schema)()
], pricingDetails);
exports.pricingDetails = pricingDetails;
exports.pricingDetailsSchema = mongoose_1.SchemaFactory.createForClass(pricingDetails);
//# sourceMappingURL=pricingdetails.schema.js.map