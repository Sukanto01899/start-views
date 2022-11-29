import React from 'react';
import { IoMdStar } from "react-icons/io";


const Reviewcard = (props) => {
    const {name, picture, body, rating} = props.review
    return (
        <div className='border w-60 md:w-56 shadow-lg rounded-md'>
            <div className='flex items-center mt-4 ml-3'>
                <div className='w-12 h-12 mr-3'><img className='w-full ring-2 ring-purple-500 rounded-full object-contain overflow-hidden' src={picture} alt="" /></div>
                <h5 className='font-semibold'>{name}</h5>
            </div>
            <p className='my-4 ml-3 text-sm'>
                {body}
            </p>
            <span className='flex mb-3 ml-3 text-xl text-amber-500'>
            <IoMdStar/>
            <IoMdStar/>
            <IoMdStar/>
            <IoMdStar/>
            </span>
        </div>
    );
};

export default Reviewcard;