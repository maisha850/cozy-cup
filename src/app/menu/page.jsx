

import { getItems } from '@/actions/server/items';
import Card from '@/Componants/Card/Card';
import Image from 'next/image';

import React from 'react';

const Menu = async() => {
    const items = await getItems()
    const hotCoffee = items.slice(0,6)
    const coldCoffee = items.slice(6,11)
    const cakeBakery = items.slice(11,18)
    return (
       <div className=''>

 {/* Background Image */}
 <section
      id=""
      className="relative w-full  flex justify-center h-[40vh] "
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlfGVufDB8fDB8fHww')",
        }}
      />

      {/* Overlay */}
        
      <div className="absolute inset-0 bg-black/60" />
 <h3 className='text-6xl absolute font-bold pt-50 text-orange-300 uppercase'>Our Menu</h3>
    </section>

     
         <div className='max-w-7xl mx-auto px-8'>
                    
          <div className=' grid md:grid-cols-2 mt-10 gap-8 justify-center'>
           
  <h3 className='text-4xl mt-20 text-primary uppercase font-black'>hot beverages</h3>          
           
{
    hotCoffee.map(coffee=><Card key={coffee._id} coffee={coffee}></Card>)
}


           </div>
                  
         <div className=' grid md:grid-cols-2 mt-10 gap-8 justify-center'>
           
  <h3 className='text-4xl mt-20 text-primary uppercase font-black'>Cold beverages</h3>          
           
{
    coldCoffee.map(coffee=><Card key={coffee._id} coffee={coffee}></Card>)
}


           </div>
                  
         <div className=' grid md:grid-cols-2 mt-10 gap-8 justify-center'>
           
  <h3 className='text-4xl mt-20 text-primary uppercase font-black'>Cake & Bakery</h3>          
           
{
    cakeBakery.map(coffee=><Card key={coffee._id} coffee={coffee}></Card>)
}


           </div>
       </div>
      
  </div>
         
        
       
    );
};

export default Menu;