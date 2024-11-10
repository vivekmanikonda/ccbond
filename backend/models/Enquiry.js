const mongoose = require("mongoose");

const EnquirySchema = new mongoose.Schema({
    ProductName: {
        type: String,
        required: true
    },
    CasNo: {
        type: String,
        required: true
    },
    Quantity: {
        type: String,
        required: true
    },

    Purity: {
        type: String,
        required: false
    },

    Description:{
        type: String,
        required: false
    },

})
const EnquiryModel = mongoose.model("Enquiry", EnquirySchema);
module.exports = EnquiryModel;