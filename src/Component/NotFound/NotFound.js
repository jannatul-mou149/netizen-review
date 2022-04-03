import React from 'react';

const NotFound = () => {
    return (
        <section className='px-4 py-32 mx-auto max-w-7xl'>
            <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
                <div>
                    <p className='mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase'>
                        Error 404 Not Found
                    </p>
                    <h1 className='mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl'>
                        Oops! Looks Like Something Went Wrong.
                    </h1>
                    <p className='mb-5 text-base text-left text-gray-800 md:text-xl'>
                        We are working on it.
                    </p>
                    <button className='w-full mb-2 py-2 px-3 text-white mt-3 bg-blue-900 sm:w-auto sm:mb-0 rounded-full'>
                        Go Home
                    </button>
                    <button className='w-full mb-2 py-2 px-3 text-white mt-3 mx-2 bg-blue-900 sm:w-auto sm:mb-0 rounded-full'>
                        Contact us
                    </button>
                </div>
                <div>
                    <div className='w-full h-full bg-gray-200 rounded-lg'>
                        <img
                            src='https://s.tmimgcdn.com/scr/800x500/122600/error-page-not-found-illustration_122693-original.jpg'
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;