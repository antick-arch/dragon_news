import BreakingNews from '@/componets/shared/BreakingNews';
import Header from '@/componets/shared/Header';
import Navbar from '@/componets/shared/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            {children}
        </>
    );
};

export default MainLayout;