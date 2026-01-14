import Image from 'next/image';
import React from 'react';
import logo from '../../public/assets/Brown_Flat_Illustrative_Cafe_Coffee_Logo-removebg-preview.png'

const Logo = () => {
    return (
        <div className=''>
            <Image  src={logo} width={80} height={80} alt=''></Image>
        </div>
    );
};

export default Logo;