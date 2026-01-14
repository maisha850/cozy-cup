"use client"
import Image from 'next/image';
import React from 'react';

const Card = ({coffee}) => {
    return (
        <div className='flex items-center gap-6 mt-5 bg-orange-100  p-4 rounded-2xl'>
      
              <Image src={coffee.image} width={100} height={100} alt='' className='w-20 h-15 object-cover rounded-full '></Image>
          
            <div>
               <div className='flex '>
                 <h3 className='text-xl font-bold uppercase'>{coffee.name} <span className='font-normal text-sm'>...........</span>  </h3>
                <span className='font-semibold'>TK{coffee.price}</span>
               </div>
                <p className='text-sm mt-2 text-gray-500 font-semibold'>{coffee.description}</p>
               
            </div>
        </div>
    );
};

export default Card;