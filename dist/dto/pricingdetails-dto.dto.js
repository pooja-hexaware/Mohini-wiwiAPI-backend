"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pricingDetailsDto = void 0;
const openapi = require("@nestjs/swagger");
class pricingDetailsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { priceId: { required: true, type: () => Object }, price: { required: true, type: () => Object }, menuId: { required: true, type: () => Object }, storeId: { required: true, type: () => Object } };
    }
}
exports.pricingDetailsDto = pricingDetailsDto;
//# sourceMappingURL=pricingdetails-dto.dto.js.map