'use client'

import React from 'react';
import Section from '@/components/Section/Section';
import SectionContent from '@/components/Section/SectionContent';
import { Flex, Button, Heading, Text, useColorModeValue, Box,Container, VStack } from '@chakra-ui/react';
import WaveSVG from '@/components/WaveSVG';

// import './Home.css'

const Home = () => {
    return(
        <>
            <Container
                p    = "0"
                h = "80vh"
                maxH = "100vh"
                maxW = "100%"
                position= "relative"
            >
                <Flex
                    mt= "5%"
                    wrap= "wrap"      
                    align= "center"
                    alignContent= "center"
                    justifyContent= "center"
                    p = "2em"
                >
                    <Heading
                        // lineHeight="1.2em"
                        w         = "4xl"
                        size      = "4xl"
                        textAlign = "center"
                    >
                        Guiding Your 
                        <Text
                            as="span"
                            // color= "#fc0349"
                            position= "relative"
                            _after={{
                                content: "''",
                                width: 'full',
                                height: '30%',
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: '#F78DA7',
                                zIndex: -1,
                            }}
                        > 
                            &nbsp;Career&nbsp;
                        </Text>
                        Journey: Charting Paths, Nurturing 
                        <Text
                            as="span"
                            // color= "#fc0349"
                            position= "relative"
                            _after={{
                                content: "''",
                                width: 'full',
                                height: '30%',
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: '#8ED1FC',
                                zIndex: -1,
                            }}  
                        >
                            &nbsp;Futures&nbsp;
                        </Text>
                    </Heading>
                    <Text
                        w         = "6xl"
                        mt        = "1rem"
                        fontSize  = "xl"
                        textAlign = "center"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Maiores numquam unde ipsum veritatis architecto! Harum 
                        eos inventore dignissimos non! Laboriosam deserunt alias 
                        velit totam dolor molestias vero repudiandae maxime hic!
                    </Text>
                    <Button
                        order={3}
                        w  = "sm"
                        mt = "1rem"
                        color={useColorModeValue("#F78DA7", "#8ED1FC")}
                        variant= "outline"
                        borderRadius = "xl"
                        border= {useColorModeValue("2px solid #F78DA7", "2px solid #8ED1FC")}
                        transition= "0.6s linear"
                        _hover={{
                            border: "none",
                            color: "#fff",
                            background: useColorModeValue("#F78DA7", "#8ED1FC")
                        }}
                    >
                        Learn More
                    </Button>
                </Flex>
                <Box
                    position= "absolute"
                    // mt= "2em"
                    bottom= "0"
                    w = "100%"
                    zIndex= "-2"
                >
                    <WaveSVG />
                </Box>
            </Container>
        </>
    )
}

export default Home;