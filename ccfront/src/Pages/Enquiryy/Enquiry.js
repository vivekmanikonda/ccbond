import React from 'react';
import { useNavigate } from 'react-router-dom';
import p1 from '../images/c3.webp'
import { Search, Building2,CircleArrowRight} from 'lucide-react'

const Enquiry = () => {
    const navigate = useNavigate();

    const openForm = () => {
        navigate('/CreateEnquiry');
    };

    return (
        <>
            <form className="flex items-center bg-white rounded-full border border-gray-300 shadow-sm max-w-md w-full p-2 ml-72 mt-5">
                <Search className="text-gray-400 mx-2" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="flex-grow focus:outline-none bg-transparent text-gray-700 px-2"
                />
                <button
                    type="submit"
                    className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-full transition-colors duration-200"
                >
                    Search
                </button>
            </form>

            {/*DETAILS FROM DATABASE */}
            <div className=' flex justify-end '>
                <button className='bg-slate-300 p-2' onClick={openForm}>ADD ENQUIRY</button>
            </div>
            <div className="flex items-center justify-center ml-72">
                <div className="flex h-[430px] w-[770px] bg-slate-100 rounded-lg shadow-lg p-6">
                    <div className='grid grid-cols-2 font-inter'>
                        <div>
                            <h1 className='font-bold text-4xl mt-7'>Product Name</h1>
                            <ul className="mt-3 text-gray-700 text-[20px]  p-4">
                                <li >
                                    <span className="font-semibold ">CAS Number:</span> 105-38-7
                                </li>
                                <li className='mt-2'>
                                    <span className="font-semibold ">Quantity:</span> 200kg
                                </li>
                                <li className='mt-2'>
                                    <span className="font-semibold ">Purity:</span> 98%
                                </li>
                                <li className='mt-2'>
                                    <span className="font-semibold ">Need:</span> 3kg
                                </li>
                                <li className='mt-2'>
                                    <span className="font-semibold ">Posted:</span> 30 Sep 2024
                                </li>
                                <li className='mt-6 mb-5'>
                                    <button className="p-2 bg-black text-white rounded-md text-[16px] hover:bg-gray-700 transition duration-200 ease-in-out shadow-sm">
                                        Contact
                                    </button>
                                </li>
                                <div className='text-[16px] flex '>
                                    <Building2 className='mr-1' />Company Name
                                </div>
                            </ul>
                        </div>
                        <div className='flex items-center flex-col mt-6 '>
                            <div className="flex-shrink-0 ">
                                <img src={p1} width={320} height={320} alt="Structure img" className="rounded-lg shadow-lg ml-10" />
                            </div>
                            <div className='text-[18px] flex mt-4 justify-end ml-48'>
                                View<CircleArrowRight className=' ml-1 flex items-center justify-center' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Enquiry;
