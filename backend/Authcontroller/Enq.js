const EnquiryModel = require('../models/Enquiry');
const Express = require('express');

exports.createEnquiry = async (req, res) => {
    //req data
    const {
        Productname, Casno, Quantity, Purity, Description, Quote, Document, Location } = req.body;
    //checking the data wheather it is there or not 
    if (!Productname || !Location || !Quantity || !Casno || !Purity || !Quote) {
        return res.status(400).json({ message: "Please fill all required fields.'" })
    }
    console.log(req.body)
    // if there it will create enquiry
    try {
        const formData = new EnquiryModel({
            Productname, Casno, Quantity, Purity, Description, Quote, Document, Location
        });
        const savedEnquiry = formData.save();
        return res.status(400).json({ message: "FORM CREATED SUCCESSFULLY", savedEnquiry })
    }
    catch (err) {
        res.status(500).json({ message: "ERROR OCCURED", err })

    }
}

exports.getEnquiry = async (req, res) => {
    try {
        const enquiries = await EnquiryModel.find();
        return res.status(201).json(enquiries);
    }
    catch (error) {
        res.status(500).json({ message: "Some error in getenquiries", error })

    }
}

