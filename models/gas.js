const mongoose = require("mongoose")
const gasSchema = mongoose.Schema({
    gas_type: String,
    quantity: {type:Number,min:2,max:40},
    cost: {type:Number,min:5,max:96}
})
module.exports = mongoose.model("Gas",
    gasSchema)