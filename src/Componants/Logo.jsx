import Image from 'next/image';
import React from 'react';

import Link from 'next/link';

const Logo = () => {
    return (
        <Link href={'/'} className=''>
            <Image  src={'/favicon.ico'} width={80} height={80} alt='cozy-cup'></Image>
        </Link>
    );
};

export default Logo;