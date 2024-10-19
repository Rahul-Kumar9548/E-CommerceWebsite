import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Tittle from './Tittle';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductItems from './ProductItems';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

       useEffect(()=>{
              setLatestProducts(products.slice(0,10));
       },[products])
  return (
    <div className='my-10'>
          <div className='text-center py-8 text-3xl'>
               <Tittle text1={'LATEST'} text2={'COLLECTION'}/>
               <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
               You can explain the collection's style and design elements, including any unique elements like embroidery, ruffles, or pleats
               </p>
          </div>
          {/* Rendering Products */}
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                  latestProducts.map((item,index)=>(
                    <ProductItems key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                  ))
                }
          </div>
    </div>
  )
}

export default LatestCollection