import React from 'react';

const Review = (props) => {
    const { name, picture, review, rating } = props.singleReview;
    return (
        <div className='shadow-lg rounded-sm  w-[350px] bg-white p-4 border-l-4 border-indigo-500'>
            <div className='flex gap-4 justify-between items-center'>
                <div className='flex-shrink-0'>
                    <img className='mx-auto object-cover rounded-full h-16 w-16' img src={picture} alt="" />
                </div>
                <div className='flex flex-col justify-end'>
                    <span className='text-gray-800 text-xl font-semibold font-serif'>{name}</span>
                    <span className='text-violet-800 font-xs mb-4'>Rating : {rating}</span>
                    <span className='text-gray-800 font-sm'>{review}</span>
                </div>
            </div>
        </div>
    );
};

export default Review;