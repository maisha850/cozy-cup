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
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1577209863447-ccd14fed6843?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      />

      {/* Overlay */}
        
      <div className="absolute inset-0 bg-black/60" />
 <h3 className='text-6xl absolute font-bold pt-50 text-orange-300 uppercase'>Log In</h3>
    <div className='absolute '>
              <LoginPage></LoginPage>
          </div>
    </section>
       
        </div>
    );
};

export default LogIn;