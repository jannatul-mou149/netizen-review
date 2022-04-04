import React from 'react';
import useReview from '../../Hooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [review, setReview] = useReview();
    return (
        <div>
            <div>
                <h1 className='mt-4 mb-4 text-2xl font-extrabold text-blue-500 md:text-4xl text-center'>Customer Review</h1>
            </div>
            <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center mb-40'>
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

export default Reviews;