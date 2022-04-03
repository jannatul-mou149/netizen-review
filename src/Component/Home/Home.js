import React from 'react';
import useReview from '../../Hooks/useReview';
import Review from '../Review/Review';

const Home = () => {
    const [review, setReview] = useReview();
    return (
        <div className='md:px-16 py-8'>
            <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
                <div>
                    <h1 className='mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl'>
                        Looking For PS5 Review Before Buying?
                    </h1>
                    <p className='mb-5 text-base text-left text-gray-800 md:text-xl'>
                        Check this out!! You will get honest opinion on your dream purchase.
                    </p>
                    <button className='w-full mb-2 py-2 px-3 text-white mt-3 mx-2 bg-blue-900 sm:w-auto sm:mb-0 rounded-full'>
                        Contact us
                    </button>
                </div>
                <img src="https://games4u.pk/wp-content/uploads/2021/06/Sony-PlayStation-5-Disc-Edition.png" alt="" />
            </div>
            <div>
                <h1 className='mt-40 mb-24 text-2xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-4xl text-center'>Customer Review</h1>
            </div>
            <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center'>
                    {
                        review.map(singleReview => <Review
                            key={singleReview.id}
                            singleReview={singleReview}
                        ></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;