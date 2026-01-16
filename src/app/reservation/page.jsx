import ReserveCard from '@/Componants/ReserveCard';
import React from 'react';

const Reservation = () => {
    return (
       <section class="">
         <section className="relative  w-full h-[40vh] flex justify-center items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1764361276489-79b17d9a8782?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwMnx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <h3 className="text-6xl mt-30 font-bold text-orange-300 uppercase relative z-10">
          Book Table
        </h3>
      </section>

<ReserveCard></ReserveCard>
  
</section>

    );
};

export default Reservation;
