import React from "react";
import { useNavigate } from "react-router-dom";

const EnquiryForm = () => {
    const navigate = useNavigate();
    const closeForm = () => {
        navigate('/Enquiry')
    }
    return (
        <div className="ml-64 mt-4 p-4 border rounded-lg">
            <h1>kya rey </h1>
            <button className="bg-red-500 p-1 text-white mt-2" onClick={closeForm}>
                Close Form
            </button>
        </div>
    );
};

export default EnquiryForm;
