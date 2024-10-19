import React, { useEffect, useState, useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Tittle from './Tittle';
import ProductItems from './ProductItems';

const BestSeller = () => {

    const { products } = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestSeller));
        setBestSeller(bestProduct.slice(0,5))
    },[products])
  return (
    <div className='my-10'>
           <div className='text-center text-3xl py-8'>
                  <Tittle text1={'BEST'} text2={'SELLERS'} />
                  <p className='w-3/4 m-auto text-sx sm:text-sm md:text-base text-gray-600'>
                  You can explain the collection's style and design elements, including any unique elements like embroidery, ruffles, or pleats 
                  </p>
           </div>
             
             <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSeller.map((item,index)=>(
                        <ProductItems key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                    ))
                }
             </div>
    </div>
  )
}

export default BestSeller;