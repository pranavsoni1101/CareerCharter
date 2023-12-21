'use client'

import Section from '@/components/Section/Section';
import SectionContent from '@/components/Section/SectionContent';
import { SettingsIcon } from '@chakra-ui/icons';
import { Box, Container, Grid, GridItem, Heading, Text, Flex } from '@chakra-ui/react';
import React from 'react';

const Services = () => {
    return(
        <>
            <Container
                p = "0"
                maxW= "100%"
            >
                <Box
                    p = "5em"
                    bgImage= "linear-gradient(45deg, #F78DA7 ,#8ED1FC )"
                >
                    <Heading
                        size= "2xl"
                        textAlign= "center"
                    >
                        What Do We Offer?
                    </Heading>
                    <Text
                        m = "0 auto"
                        w = "xl"
                        mt = "1em"
                        textAlign= "center"
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Natus eos ea, voluptatum maiores in
                    </Text>
                </Box>
            </Container>

            <Section>
                <SectionContent>
                    <Grid
                        templateColumns = "repeat(12, 1fr)"
                        gap = {4}
                    >
                        <GridItem
                            colSpan={4}
                        >
                            <Flex
                                p = "2em"
                                w = "100%"
                                // h = "20em"
                                boxSize= "100%"
                                alignItems= "center"
                            >
                                <Heading
                                    textTransform= "uppercase"
                                >
                                    Our Services
                                </Heading>
                            </Flex>
                        </GridItem>
                        <GridItem
                            colSpan={4}
                        >
                            <Box
                                p = "2em"
                                w = "100%"
                                // h = "20em"
                                boxSize= "100%"
                                borderRadius= "xl"
                                boxShadow= "xl"
                                bg = "#8ED1FC60"
                            >
                                <SettingsIcon
                                    fontSize= "md"
                                />
                                <Heading
                                    my = "0.5em"
                                    size = "md"
                                >
                                    Lorem Ipsum
                                </Heading>
                                <Text>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                    Reprehenderit, consequatur odit. Amet harum sint sequi 
                                    fugiat impedit cum, odio reprehenderit quae deleniti 
                                    voluptatum at ipsa non? Iusto quibusdam fugiat nisi.
                                </Text>
                            </Box>
                        </GridItem>
                        <GridItem
                            colSpan={4}
                        >
                            <Box
                                p = "2em"
                                w = "100%"
                                // h = "20em"
                                boxSize= "100%"
                                borderRadius= "xl"
                                boxShadow= "xl"
                                bg = "#F78DA760"
                            >
                                <SettingsIcon
                                    fontSize= "md"
                                />
                                <Heading
                                    my = "0.5em"
                                    size = "md"
                                >
                                    Lorem Ipsum
                                </Heading>
                                <Text>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                    Reprehenderit, consequatur odit. Amet harum sint sequi 
                                    fugiat impedit cum, odio reprehenderit quae deleniti 
                                    voluptatum at ipsa non? Iusto quibusdam fugiat nisi.
                                </Text>
                            </Box>
                        </GridItem>
                        <GridItem
                            colSpan={4}
                        >
                            <Box
                                p = "2em"
                                w = "100%"
                                // h = "20em"
                                boxSize= "100%"
                                borderRadius= "xl"
                                boxShadow= "xl"
                                bg = "#8ED1FC60"
                            >
                                <SettingsIcon
                                    fontSize= "md"
                                />
                                <Heading
                                    my = "0.5em"
                                    size = "md"
                                >
                                    Lorem Ipsum
                                </Heading>
                                <Text>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                    Reprehenderit, consequatur odit. Amet harum sint sequi 
                                    fugiat impedit cum, odio reprehenderit quae deleniti 
                                    voluptatum at ipsa non? Iusto quibusdam fugiat nisi.
                                </Text>
                            </Box>
                        </GridItem>
                        <GridItem
                            colSpan={4}
                        >
                            <Box
                                p = "2em"
                                w = "100%"
                                // h = "20em"
                                boxSize= "100%"
                                borderRadius= "xl"
                                boxShadow= "xl"
                                bg = "#F78DA760"
                            >
                                <SettingsIcon
                                    fontSize= "md"
                                />
                                <Heading
                                    my = "0.5em"
                                    size = "md"
                                >
                                    Lorem Ipsum
                                </Heading>
                                <Text>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                    Reprehenderit, consequatur odit. Amet harum sint sequi 
                                    fugiat impedit cum, odio reprehenderit quae deleniti 
                                    voluptatum at ipsa non? Iusto quibusdam fugiat nisi.
                                </Text>
                            </Box>
                        </GridItem>
                        <GridItem
                            colSpan={4}
                        >
                            <Box
                                p = "2em"
                                w = "100%"
                                // h = "20em"
                                boxSize= "100%"
                                borderRadius= "xl"
                                boxShadow= "xl"
                                bg = "#8ED1FC60"
                            >
                                <SettingsIcon
                                    fontSize= "md"
                                />
                                <Heading
                                    my = "0.5em"
                                    size = "md"
                                >
                                    Lorem Ipsum
                                </Heading>
                                <Text>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                    Reprehenderit, consequatur odit. Amet harum sint sequi 
                                    fugiat impedit cum, odio reprehenderit quae deleniti 
                                    voluptatum at ipsa non? Iusto quibusdam fugiat nisi.
                                </Text>
                            </Box>
                        </GridItem>
                    </Grid>
                </SectionContent>
            </Section>
        </>
    )
}

export default Services;