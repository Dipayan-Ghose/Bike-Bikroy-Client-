import React from 'react';
import Banner from './Banner/Banner';
import LoadCategories from './LoadCategories/LoadCategories';

const Home = () => {
    return (
        <div>
            <div className='max-w-[900px] mx-auto my-5'><Banner></Banner></div>
            <div className='my-5 mx-auto'><LoadCategories></LoadCategories></div>
        </div>
    );
};

export default Home;