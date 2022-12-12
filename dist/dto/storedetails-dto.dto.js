"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeDetailsDto = void 0;
const openapi = require("@nestjs/swagger");
class storeDetailsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { storeId: { required: true, type: () => Object }, storeName: { required: true, type: () => String }, storeLocation: { required: true, type: () => ({ Latitude: { required: true, type: () => String }, Longitude: { required: true, type: () => String }, Address: { required: true, type: () => String }, City: { required: true, type: () => String }, Zipcode: { required: true, type: () => String } }) } };
    }
}
exports.storeDetailsDto = storeDetailsDto;
//# sourceMappingURL=storedetails-dto.dto.js.map