import Image from 'next/image';
import React from 'react';
import headerImg from '@/assets/logo.png';
const Header = () => {
    return (
        <div>
            <Image src={headerImg} width={80} height={80}></Image>
        </div>
    );
};

export default Header;