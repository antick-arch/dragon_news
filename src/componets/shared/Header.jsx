import Image from 'next/image';
import React from 'react';
import headerImg from '@/assets/logo.png';
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 mt-10 mb-7'>
            <Image src={headerImg} width={471} height={60} alt='header image' loading="eager" className='w-117 h-15'></Image>
            <p className='text-[1.2rem] text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='text-gray-500 font-medium text-xl'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;