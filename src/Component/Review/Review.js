import React from 'react';

const Review = (props) => {
    const { name, picture, review, rating } = props.singleReview;
    return (
        <div className='shadow-lg rounded-2xl w-[350px] bg-white p-4'>
            <div className='flex gap-4 justify-between items-center'>
                <div className='flex-shrink-0'>
                    <img className='mx-auto object-cover rounded-full h-16 w-16' img src={picture} alt="" />
                </div>
                <div className='flex flex-col justify-end'>
                    <span className='text-gray-800 text-xl font-semibold font-serif'>{name}</span>
                    <span className='text-green-500 font-xs'>Rating : {rating}</span>
                    <span className='text-gray-800 font-sm'>{review}</span>
                </div>
            </div>
        </div>
    );
};

export default Review;