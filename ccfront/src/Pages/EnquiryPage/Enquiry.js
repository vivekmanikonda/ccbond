import React from 'react'
import { useNavigate } from 'react-router-dom'


const Enquiry = () => { 
    const navigate = useNavigate();  
    const openForm = () => {
           navigate('/Enquirycreate')
    }
    return (
        <div className=' ml-64'>
            HIII HELLO HOW ARE YOUU!!PPPPPPPPPPPPPPPPPPPPPPP
            <button className='bg-slate-300 p-2 ' onClick={openForm} >ADD ENQUIRY</button>
            
        </div>
    )
}

export default Enquiry
