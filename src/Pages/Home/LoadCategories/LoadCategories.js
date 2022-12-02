import React, { useEffect, useState } from 'react';
import LoadCategory from './LoadCategory';

const LoadCategories = () => {

    const [loadData, setLoadData]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setLoadData(data))
        .catch(err=> console.log(err))
    },[]);
    return (
        <div className='max-w-[550px] my-8 gap-7 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mx-auto'>
            {loadData.map((data,i)=><LoadCategory
            key={i}
            data={data}
            ></LoadCategory>)}
        </div>
    );
};

export default LoadCategories;