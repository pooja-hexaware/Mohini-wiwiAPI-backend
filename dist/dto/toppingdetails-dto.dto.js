"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toppingDetailsDto = void 0;
const openapi = require("@nestjs/swagger");
class toppingDetailsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { toppingId: { required: true, type: () => Object }, toppings: { required: true, type: () => Object }, menuId: { required: true, type: () => Object }, priceId: { required: true, type: () => Object } };
    }
}
exports.toppingDetailsDto = toppingDetailsDto;
//# sourceMappingURL=toppingdetails-dto.dto.js.map