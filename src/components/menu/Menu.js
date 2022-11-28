import React, { useState } from 'react';
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='flex justify-between items-center h-14 px-12 md:px-16 lg:px-44 bg-violet-300'>
            <h1 className='text-2xl md:text-3xl uppercase'>Start View</h1>
            <div className='space-x-12 text-lg hidden md:block'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/reviews'}>Reviews</NavLink>
                <NavLink to={'/dashboard'}>Dashboard</NavLink>
                <NavLink to={'/blogs'}>Blogs</NavLink>
            </div>
            <div className='block md:hidden'>
            <HiBars3BottomRight onClick={()=> setToggle(!toggle)} className={`${toggle ? 'hidden' : 'block'} text-3xl md:hidden`}/>
            <HiOutlineXMark onClick={()=> setToggle(!toggle)} className={`${toggle ? 'block' : 'hidden'} text-3xl md:hidden`}/>

            <div className={`${toggle ? 'top-30px' : 'top-[-250px]'} left-0 w-full h-[250px] absolute bg-violet-300 flex flex-col justify-center items-center space-y-8 duration-500`}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/reviews'}>Reviews</NavLink>
                <NavLink to={'/dashboard'}>Dashboard</NavLink>
                <NavLink to={'/blogs'}>Blogs</NavLink>
            </div>
            </div>
        </div>
    );
};

export default Menu;