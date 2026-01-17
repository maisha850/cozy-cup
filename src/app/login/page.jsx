// import LoginPage from '@/Componants/LogInPage';
// import React from 'react';

// const LogIn = () => {
//     return (
//         <div className='pb-24'>
//             {/* Background Image */}
//  <section
//       id=""
//       className="relative  w-full   flex justify-center h-[40vh] "
//     >
     
//  <h3 className='text-6xl absolute font-bold  text-orange-300 z-20 pt-40 uppercase'>Log In</h3>
//     <div className=' '>
//               <LoginPage></LoginPage>
//           </div>
//     </section>
       
//         </div>
//     );
// };

// export default LogIn;

import LoginPage from '@/Componants/LogInPage';
import React from 'react';

const LogIn = () => {
  return (
    <div className="">
      
      {/* HEADER SECTION */}
      <section
        className="relative w-full flex justify-center h-[40vh]"
      >
        <h3 className="md:text-7xl text-5xl absolute font-bold text-orange-300 z-20 pt-40 uppercase">
          Log In
        </h3>

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1764361276489-79b17d9a8782?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwMnx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />
      </section>

      {/* LOGIN FORM SECTION */}
      <div className="  ">
  <LoginPage></LoginPage>
      </div>

    </div>
  );
};

export default LogIn;
