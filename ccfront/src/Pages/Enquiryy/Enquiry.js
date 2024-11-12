import React from 'react';
import { useNavigate } from 'react-router-dom';

const Enquiry = () => {
    const navigate = useNavigate();

    const openForm = () => {
        navigate('/CreateEnquiry');
    };
    return (
        <>
            <div className='ml-64 flex justify-end mr-10 mt-10'>
                <button className='bg-slate-300 p-2' onClick={openForm}>ADD ENQUIRY</button>
            </div>


        </>
    );
};

export default Enquiry;
