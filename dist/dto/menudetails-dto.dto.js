"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuDetailsDto = void 0;
const openapi = require("@nestjs/swagger");
class menuDetailsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { menuId: { required: true, type: () => Object }, menuName: { required: true, type: () => String }, menuDescription: { required: true, type: () => String }, storeId: { required: true, type: () => Object } };
    }
}
exports.menuDetailsDto = menuDetailsDto;
//# sourceMappingURL=menudetails-dto.dto.js.map