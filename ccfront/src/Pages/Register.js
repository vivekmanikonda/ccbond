import React, { useState } from 'react';
import backgroundImage from './images/bglogin.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [Name, setName] = useState('');
    const [CompanyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [CompanyUrl, setCompanyUrl] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();


    // Handling register submit button
    const HandleRegister = async (e) => {
        e.preventDefault(); // Prevent default form submission

        if (Password !== ConfirmPassword) { // Check if passwords match
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/auth/register', {
                Name,
                email,
                Password,
                CompanyName,
                CompanyUrl,
                PhoneNumber,
                ConfirmPassword
            });

            setSuccessMessage("Registration Successful!!");
            console.log("Registration Successful", response.data);
            navigate('/Enquiry');
        } catch (error) {
            if (error.response)
            // Catching errors and displaying them with a message
            {
                setError(error.response.data.message || "Error occurred, Pls try again later!!");
            } else {
                setError("REGISTERATION FAILED..Pls try again later!!");
            }
        }
    };

    return (
        <div className='flex justify-center items-center h-screen w-screen' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <form className='bg-slate-400 p-14 shadow-2xl flex justify-center items-center font-inter text-lg' onSubmit={HandleRegister}>
                <div className="grid grid-cols-2 gap-4 -mr-40">
                    <label>Name<br />
                        <input className='w-64 p-1 rounded-xl border-2' type='text' placeholder='Enter your name'
                            required value={Name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>Company Name<br />
                        <input className='w-64 p-1 rounded-xl' type='text' placeholder='Enter your Company name' value={CompanyName}
                            required
                            onChange={(e) => setCompanyName(e.target.value)} />
                    </label>
                    <label>Email<br />
                        <input className='w-64 p-1 rounded-xl' type="email" placeholder='Enter your Company Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>

                    <label>Phone Number<br />
                        <input className='w-64 p-1 rounded-xl' type="tel" placeholder='Enter your number' value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </label>
                    <label>Company Url<br />
                        <input className='w-64 p-1 rounded-xl' type="url" placeholder='Enter url' inputMode="numeric" value={CompanyUrl} onChange={(e) => setCompanyUrl(e.target.value)} />
                    </label>
                    <label>Password<br />
                        <input className='w-64 p-1 rounded-xl' type="password" placeholder='Enter your password' value={Password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <label>Confirm Password<br />
                        <input className='w-64 p-1 rounded-xl' type="password" placeholder='Confirm your password' value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </label>

                    <label className='text-white'>
                        <input type='checkbox' /> I agree to the Terms of Service and Privacy Policy
                    </label><br />
                    {/*here we are using error and successmeassage to dispaly */}
                    {error && <p className="text-white-400">{error};
                    </p>}
                    {successMessage && <p className="text-white">{successMessage}</p>}
                    <br />
                    <div >
                        <button type="submit" className=' font-inter  bg-blue-500 hover:bg-blue-200
                    text-balck rounded-xl w-60 p-2 '>Register</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Register;
