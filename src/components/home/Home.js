import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useReview } from '../../hooks/useReview';
import Header from '../header/Header';
import Reviewcard from '../reviews/Reviewcard';

const Home = () => {
    const [reviews, setReview] = useReview()
    const navigate = useNavigate()
    const showAllReviews = ()=>{
        navigate('./reviews')
    };
    const homeReviews = [];
    for(let i = 0; i < 4; i++){
        homeReviews.push(reviews[i])
    }
    
    return (
        <React.Fragment>
            <Header/>
            <section className='flex justify-center items-center mt-5'>
                <div className='flex flex-col items-center '>
                <h1 className='text-4xl'>Reviews</h1>
                <div className='grid md:grid-cols-3 gap-x-32 gap-y-16 my-8'>
                    {reviews.map((review, index) => index < 3 ? <Reviewcard key={review.id} review={review}/> : undefined)}
                </div>
                <button className='bg-purple-500 text-white py-2 px-4 text-xl' onClick={showAllReviews}>Show All Reviews</button>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Home;