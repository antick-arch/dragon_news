import Image from 'next/image';
import React from 'react';
import userImg from '@/assets/user.png'
import Navlink from './Navlink';
import Link from 'next/link';
const Navbar = () => {
    return (
        <div className='flex justify-between items-center container mx-auto mt-5'>
            <div></div>
            <ul className='flex text-[#706F6F] gap-3'>
                <Navlink href="/">Home</Navlink>
                <Navlink href="/about-us">About</Navlink>
                <Navlink href="/career">Career</Navlink>
            </ul>
            <div className='flex gap-3'>
                <Image src={userImg} width={41} height={41} alt='user logo'></Image>
                <Link href={'/login'} className='btn bg-[#403F3F] text-white w-35'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;