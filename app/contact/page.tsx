'use client'

import React from 'react';
import Section from '@/components/Section/Section';
import SectionContent from '@/components/Section/SectionContent';
import { Box, Button, Flex, FormControl, 
         FormLabel, Grid, GridItem, 
         HStack, 
         Heading, Image, Input, 
         Text, Textarea, VStack, useColorModeValue 
    } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Metadata } from 'next';
// import Head from 'next/head';


// export const metadata: Metadata = {
//     title: "Contact Us"
// }

const Contact = () => {
    return(
        <>  
            {/* <Head>
                <title>Contact Us</title>
            </Head> */}
            <Section>
                <SectionContent>
                    <Heading
                        size= "3xl"
                        textAlign= "center"
                    >
                        Let's Talk!
                    </Heading>
                    <Text
                        textAlign= "center"     
                        m = "0 auto"
                        width= "lg"
                        mt = "1rem"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.    
                    </Text>
                    <Grid
                        mt = "1em"
                        templateRows = "repeat(2, 1fr)"
                        templateColumns = "repeat(12, 1fr)"
                        gap={4}
                        
                        >
                        <GridItem
                            colSpan={6}
                            rowSpan={2}
                            >
                            <Box
                                bg = {useColorModeValue("gray.600", "white")}
                                color = {useColorModeValue("white", "black")}
                                p            = "2em"
                                borderRadius = "2xl"
                                boxShadow= "lg"
                            >
                                <Heading>
                                    Let's Chat, Reach out to Us 
                                </Heading>
                                <Text
                                    mt = "1em"
                                >
                                    Have questions or feedback? We're here to help.
                                    Send us a message and we'll respond within 24 hours
                                </Text>
                                <VStack
                                    mt = "1em"
                                    spacing={5}
                                >
                                    <FormControl>
                                        <FormLabel>Name</FormLabel>
                                        <Input 
                                            type = "text"
                                            variant= "filled"
                                            placeholder='Raj Sharma'
                                            color={useColorModeValue("black", "white")}
                                            bg = {useColorModeValue("gray.100","gray.600")}
                                            _focus={{
                                                bg: useColorModeValue("gray.100","gray.600")
                                            }}
                                            _hover={{
                                                bg: useColorModeValue("gray.100","gray.600")
                                            }}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Mobile</FormLabel>
                                        <Input 
                                            type = "text"
                                            variant= "filled"
                                            placeholder='+91xxxxx-xxxxx'
                                            color={useColorModeValue("black", "white")}
                                            bg = {useColorModeValue("gray.100","gray.600")}
                                            _focus={{
                                                bg: useColorModeValue("gray.100","gray.600")
                                            }}
                                            _hover={{
                                                bg: useColorModeValue("gray.100","gray.600")
                                            }}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Email</FormLabel>
                                        <Input 
                                            type = "Email"
                                            variant= "filled"
                                            placeholder= 'rajsharma@abc.com'
                                            color={useColorModeValue("black", "white")}
                                            bg = {useColorModeValue("gray.100","gray.600")}
                                            _focus={{
                                                bg: useColorModeValue("gray.100","gray.600")
                                            }}
                                            _hover={{
                                                bg: useColorModeValue("gray.100","gray.600")
                                            }}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Message</FormLabel>
                                        <Textarea
                                            h = "2em"
                                            placeholder='Type your message here...'
                                            variant= "filled"
                                            color={useColorModeValue("black", "white")}
                                            bg = {useColorModeValue("gray.100","gray.600")}
                                            _focus={{
                                                bg: useColorModeValue("gray.100","gray.600")
                                            }}
                                            _hover={{
                                                bg: useColorModeValue("gray.100","gray.600")
                                            }}
                                        />
                                    </FormControl>
                                    <Button
                                        // mt = "1.4em"
                                        w = "sm"
                                        colorScheme='green'
                                    >
                                        Submit
                                    </Button>
                                </VStack>
                            </Box>
                        </GridItem>
                        <GridItem
                            colSpan={6}
                        >
                            <Image 
                                src = "https://images.unsplash.com/photo-1592890288564-76628a30a657?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                borderRadius= "2xl"
                                boxShadow= "xl"
                            />
                        </GridItem>
                        <GridItem
                            colSpan={6}
                        >
                            <VStack
                                p = "2em"
                                justify= "space-evenly"
                                justifyContent= "space-between"
                                boxShadow= "xl"
                                borderRadius= "2xl"
                                spacing={4}
                                bg = {useColorModeValue("gray.600", "white")}
                                color = {useColorModeValue("black", "white")}
                            >
                                <HStack  
                                    borderRadius= "lg"
                                    w = "100%"
                                    p = "1em"
                                    bg = {useColorModeValue("gray.100", "gray.600")}
                                    spacing={6}
                                >
                                    <EmailIcon
                                        fontSize= "1.4em"
                                    />
                                    <VStack>
                                        <Heading
                                            float= "left"
                                            textAlign= "left"
                                            // display= "inline-block"
                                            size = "md"
                                        >
                                            &nbsp;Email
                                        </Heading>
                                        <Text
                                            textAlign= "left"
                                        >
                                            hello@abc.com
                                        </Text>
                                    </VStack>
                                </HStack>
                                <HStack  
                                    borderRadius= "lg"
                                    w = "100%"
                                    p = "1em"
                                    bg = {useColorModeValue("gray.100", "gray.600")}
                                    spacing={6}
                                >
                                    <PhoneIcon
                                        fontSize= "1.4em"
                                    />
                                    <VStack>
                                        <Heading
                                            float= "left"
                                            textAlign= "left"
                                            // display= "inline-block"
                                            size = "md"
                                        >
                                            &nbsp;Mobile
                                        </Heading>
                                        <Text
                                            textAlign= "left"
                                        >
                                            +91 xxxxx-xxxxx
                                        </Text>
                                    </VStack>
                                </HStack>
                            </VStack>
                        </GridItem>
                    </Grid>
                </SectionContent>
            </Section>
        </>
    )
}

export default Contact;