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
        type: File,

    },
    Quote: {
        type: String

    },
    Document: {
        type: File,
    },
    DatePosted: {
        type: Date,
        default: Date.now
    },

})
const EnquiryModel = mongoose.model("Enquiry", EnquirySchema);
module.exports = EnquiryModel;

const fileSchema = new mongoose.Schema({
    file: Buffer,
    filename: String,
    contentType: String
});

const File = mongoose.model('File', fileSchema);