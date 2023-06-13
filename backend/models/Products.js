const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description : { type: String, required: true},
  price: { type: Number, required: true },
  availability: { type: Boolean, required: true, default: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: String}, // optional
  isRental: { type: Boolean, default: false },
  imageURL: { type: String }
});


module.exports = mongoose.model("Product", productSchema);