"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartSchema = void 0;
const mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');
exports.CartSchema = new mongoose.Schema({
    cartId: String,
    menuId: Number,
    storeId: String,
    price: String
});
autoIncrement.initialize(mongoose.connection);
exports.CartSchema.plugin(autoIncrement.plugin, {
    model: "cart",
    field: "catId",
    startAt: 1,
    incrementBy: 1,
});
module.exports = mongoose.model("cart", exports.CartSchema);
//# sourceMappingURL=cart.schema.js.map