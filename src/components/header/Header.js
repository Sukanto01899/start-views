import React from 'react';
import photo from '../../assets/rsz_21photo.jpg';

const Header = () => {
    return (
        <header className='flex flex-col md:flex-row justify-center md:justify-between items-center w-full md:w-10/12 mx-auto py-5 md:py-0 mt-12 bg-purple-100 rounded-lg overflow-hidden'>
            <div className='ml-5 text-center md:text-left'>
                <h1 className='text-3xl md:text-5xl md:leading-[70px]'><span className='text-[#C700FD]'>GET DEALS ON THOUSANDS </span><br/> OF RESTAURANTS <br className='hidden md:block'/> ACROSS THE NATION</h1>
                <p className='text-2xl md:text-3xl'>Over 6 restaurants near South Streator, IL</p>
            </div>
            <img className='w-44 md:w-80 mt-5 md:mt-0' src={photo} alt="" />
        </header>
    );
};

export default Header;