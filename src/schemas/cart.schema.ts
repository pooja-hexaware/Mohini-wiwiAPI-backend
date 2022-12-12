import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
const mongoose = require("mongoose"); 
var autoIncrement = require('mongoose-auto-increment');



export const CartSchema = new mongoose.Schema({
    cartId: String,
    menuId: Number,
    storeId: String,
    price: String
  });

  autoIncrement.initialize(mongoose.connection);
  CartSchema.plugin(autoIncrement.plugin, {
  model: "cart", 
  field: "catId",
  startAt: 1, 
  incrementBy: 1, 
});

module.exports = mongoose.model("cart", CartSchema);


