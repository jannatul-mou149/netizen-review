import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../Hooks/useReview';
import Review from '../Review/Review';

const Home = () => {
    const [review, setReview] = useReview();
    const navigate = useNavigate();
    const showMore = () => {
        navigate('/reviews');
    }
    return (
        <div className='md:px-16 py-8'>
            <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
                <div>
                    <h1 className='mb-4 text-2xl font-extrabold text-left text-blue-500 md:text-4xl'>
                        Looking For PS5 Review Before Buying?
                    </h1>
                    <p className='mb-5 text-base text-left text-gray-800 md:text-xl'>
                        Check this out!! You will get honest opinion on your dream purchase.
                    </p>

                    <button type="button" class="flex justify-center items-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Contact Us <svg className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg></button>
                </div>
                <img src="https://games4u.pk/wp-content/uploads/2021/06/Sony-PlayStation-5-Disc-Edition.png" alt="" />
            </div>
            <div>
                <h1 className='mt-40 mb-24 text-2xl font-extrabold text-blue-500 md:text-4xl text-center'>Customer Review</h1>
            </div>
            <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center'>
                    {
                        review.slice(0, 3).map(singleReview => <Review
                            key={singleReview.id}
                            singleReview={singleReview}
                        ></Review>)
                    }
                </div>
                <button onClick={showMore} type="button" class="flex justify-center items-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-8 mb-2 mt-12 h-10">See More <svg className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg></button>
            </div>

        </div>
    );
};

export default Home;