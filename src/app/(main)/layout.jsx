import Header from '@/componets/shared/Header';
import Navbar from '@/componets/shared/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            {children}
        </>
    );
};

export default MainLayout;