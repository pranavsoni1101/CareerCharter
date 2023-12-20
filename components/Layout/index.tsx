import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

interface LayoutProps {
    children: ReactNode | ReactNode[]
}

const Layout = ({children}: LayoutProps) =>  {
    return(
        <>
            {/* Navbar goes here */}
            <Navbar />
            {/* children will accept all the child components to be displayed */}
            <Box>
                {children}
            </Box>
            <Footer />
        </>
    )
}
export default Layout;