'use client'

import React from 'react';
import Section from '@/components/Section/Section';
import SectionContent from '@/components/Section/SectionContent';
import { Flex, Button, Heading, Text, useColorModeValue } from '@chakra-ui/react';

// import './Home.css'

const Home = () => {
    return(
        <>
        <Section>
            <SectionContent>
                <Heading
                    // lineHeight="1.2em"
                    // w         = "xl"
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
                            bg: '#fc0349',
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
                            bg: '#03ebfc',
                            zIndex: -1,
                        }}  
                    >
                        &nbsp;Futures&nbsp;
                    </Text>
                </Heading>
                <Text
                    mt        = "1rem"
                    fontSize  = "xl"
                    textAlign = "center"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Maiores numquam unde ipsum veritatis architecto! Harum 
                    eos inventore dignissimos non! Laboriosam deserunt alias 
                    velit totam dolor molestias vero repudiandae maxime hic!
                </Text>
                <Flex
                    justifyContent= "center"
                >
                    <Button
                        w  = "sm"
                        mt = "1rem"
                        color={useColorModeValue("#fc0349", "#03ebfc")}
                        variant= "outline"
                        borderRadius = "xl"
                        border= {useColorModeValue("2px solid #fc0349", "2px solid #03ebfc")}
                        transition= "0.6s linear"
                        _hover={{
                            border: "none",
                            color: "#fff",
                            background: useColorModeValue("#fc0349", "#03ebfc")
                        }}
                    >
                        Learn More
                    </Button>
                </Flex>
            </SectionContent>
        </Section>
        </>
    )
}

export default Home;