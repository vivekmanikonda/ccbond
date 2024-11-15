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
    Location: {
        country: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
    },

    Description: {
        type: String,

    },
    Structure: {
        type: Buffer,

    },
    Quote: {
        type: String

    },
    Document: {
        type: Buffer,
    },
    DatePosted: {
        type: Date,
        default: Date.now
    },

})
const EnquiryModel = mongoose.model("Enquiry", EnquirySchema);
module.exports = EnquiryModel;

