import React from 'react';
import { useReview } from '../../hooks/useReview';
import Reviewcard from './Reviewcard';

const Reviews = () => {
    const [reviews, setReview] = useReview()
    // console.log(reviews)
    return (
        <div className='flex flex-wrap justify-center md:justify-between w-full md:w-8/12 mx-auto mt-20 gap-5'>
            {reviews.map(review => <Reviewcard key={review.id} review={review}/>)}
        </div>
    );
};

export default Reviews;