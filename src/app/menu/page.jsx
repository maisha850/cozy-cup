
import Card from '@/Componants/Card/Card';
import { coldCoffee, hotCoffee } from '@/index';
import React from 'react';

const Menu = () => {
    
    return (
       <div className='w-10/12 mx-auto'>
         <div className=' grid md:grid-cols-2 mt-24 gap-20 justify-center'>
           <div>
             <h3 className='text-4xl mt-20 text-primary uppercase font-black'>hot beverages</h3>
            {
                hotCoffee.map(coffee=><Card key={coffee.id} coffee={coffee}></Card>)
            }
           </div>
            <div>
                 <h3 className='text-4xl mt-20 text-primary uppercase font-black'>Cold beverages</h3>
            {
                coldCoffee.map(coffee=><Card key={coffee.id} coffee={coffee}></Card>)
            }
            </div>
        </div>
       </div>
    );
};

export default Menu;