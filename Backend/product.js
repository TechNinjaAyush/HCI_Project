const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  marks: Object,
});

module.exports = mongoose.model("UT-info", productSchema);
