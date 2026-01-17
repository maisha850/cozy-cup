

// import { getItems } from '@/actions/server/items';
// import Card from '@/Componants/Card/Card';
// import Image from 'next/image';

// import React from 'react';

// const Menu = async() => {
//     const items = await getItems()
//     const hotCoffee = items.slice(0,6)
//     const coldCoffee = items.slice(6,11)
//     const cakeBakery = items.slice(11,18)
//     return (
//        <div className=''>

//  {/* Background Image */}
//  <section
//       id=""
//       className="relative w-full  flex justify-center h-[40vh] "
//     >
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlfGVufDB8fDB8fHww')",
//         }}
//       />

//       {/* Overlay */}
        
//       <div className="absolute inset-0 bg-black/60" />
//  <h3 className='text-6xl absolute font-bold pt-50 text-orange-300 uppercase'>Our Menu</h3>
//     </section>

     
//          <div className='max-w-7xl mx-auto px-8'>
                    
//           <div className='  ' >
           
//   <h3 className='text-4xl mt-20 text-primary uppercase font-black'>hot beverages</h3>          
           
// {
//     hotCoffee.map(coffee=><Card key={coffee._id} coffee={coffee}></Card>)
// }


//            </div>
                  
//          <div className=' '>
           
//   <h3 className='text-4xl mt-20 text-primary uppercase font-black'>Cold beverages</h3>          
           
// {
//     coldCoffee.map(coffee=><Card key={coffee._id} coffee={coffee}></Card>)
// }


//            </div>
                  
//          <div className=' '>
           
//   <h3 className='text-4xl mt-20 text-primary uppercase font-black'>Cake & Bakery</h3>          
           
// {
//     cakeBakery.map(coffee=><Card key={coffee._id} coffee={coffee}></Card>)
// }


//            </div>
//        </div>
      
//   </div>
         
        
       
//     );
// };

// export default Menu;

import { getItems } from "@/actions/server/items";
import MenuClient from "@/Componants/MenuClient";


const Menu = async () => {
  const items = await getItems();

  const hotCoffee = items.slice(0, 6);
  const coldCoffee = items.slice(6, 11);
  const cakeBakery = items.slice(11, 18);

  return (
    <div>
      {/* Banner Section */}
      <section className="relative  w-full h-[40vh] flex justify-center items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1764361276489-79b17d9a8782?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwMnx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className='text-center'>
         <h3 className="md:text-7xl text-5xl  mt-30  font-bold text-orange-300 uppercase relative z-10">
          our menu
        </h3>
        <p className='text-white relative z-10 mt-3 px-4'>Explore our handcrafted drinks and delicious plates.</p>
     </div>
      </section>

      {/* Client Component */}
      <MenuClient
        hotCoffee={hotCoffee}
        coldCoffee={coldCoffee}
        cakeBakery={cakeBakery}
      />
    </div>
  );
};

export default Menu;
