import React from 'react';
import { useNavigate } from 'react-router-dom';
import error from '../../assets/3793096.jpg';

const Error = () => {
    const navigate = useNavigate()
    const errorToHome = ()=>{
        navigate('/')
    };
    
    return (
        <div className='flex flex-col justify-center mt-5 md:mt-0 md:flex-row md:justify-between items-center w-[80%] mx-auto'>
            <div>
                <h1 className='text-7xl mb-5 font-serif'>OOPS</h1>
                <h2 className='text-4xl uppercase'>Page Not Found</h2>
                <button onClick={errorToHome} className='bg-purple-500 text-xl text-white py-3 px-6 mt-4'>Back To Home</button>
            </div>
            <img className='w-[700px]' src={error} alt="" />
        </div>
    );
};

export default Error;