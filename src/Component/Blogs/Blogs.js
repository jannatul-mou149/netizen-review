import React from 'react';

const Blogs = () => {
    return (
        <div className='h-[75vh]'>
            <h1 className='mt-8 mb-24 text-2xl font-extrabold text-blue-500 md:text-4xl text-center'>Personal Blog</h1>
            <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32 mt-8'>

                <div>
                    <h1 className='text-2xl font-semibold mb-8'>What is the purpose of Context API?</h1>
                    Context API gives the power of building up interconnection among the components without the help of Props. Usually, we pass data or function as props to share that with another component. For that we need to share data in a hierarchy way. However, Context API solved this boring passing props game which was time consuming. We can use Context API by using setContext and getContext. For example : By calling setContext(key, context) in a component any child component can retrieve the context with const context = getContext(key). It is a very Powerful feature to share data in any component very securely.
                </div>
                <div >
                    <h1 className='text-2xl font-semibold mb-8'>Differnce between Inline Block and Block Element</h1>
                    Block level element always takes the full width available and browser adds margin on its left and right. Block elements always starts a newline. On the other hand, Inline Element doesn't start any new line and also doesn't take additional margin or width than its needs. Example of Inline elements are: span , b ,i  ,img etc. and block element is div, nav, table, p etc. With the help of css display property we can make any inline element behave like block and any block element behave like inline.
                </div>

            </div>
        </div>
    );
};

export default Blogs;