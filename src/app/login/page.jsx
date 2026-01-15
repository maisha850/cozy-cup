import LoginPage from '@/Componants/LogInPage';
import React from 'react';

const LogIn = () => {
    return (
        <div className=''>
            {/* Background Image */}
 <section
      id=""
      className="relative  w-full   flex justify-center h-[40vh] "
    >
     
 <h3 className='text-6xl absolute font-bold  text-orange-300 z-20 pt-40 uppercase'>Log In</h3>
    <div className='absolute '>
              <LoginPage></LoginPage>
          </div>
    </section>
       
        </div>
    );
};

export default LogIn;