import Section from '@/components/Section/Section';
import SectionContent from '@/components/Section/SectionContent';
import { Heading, Box, Container, Text, Divider, Image } from '@chakra-ui/react';
import React from 'react';

const About = () => {
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
                        Who are we?
                    </Heading>
                    <Text
                        m = "0 auto"
                        w = "xl"
                        mt = "1em"
                        textAlign= "center"
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Natus eos ea, voluptatum maiores in dignissimos saepe 
                        adipisci est blanditiis esse porro quae, ducimus fugit. 
                        Molestiae culpa ut numquam sint ab.
                    </Text>
                </Box>
            </Container>

            <Section>
                <SectionContent>
                    <Divider 
                        h = "3px"
                        w = "xs"
                        m = "2.5em auto"
                        backgroundImage="linear-gradient(45deg, #8ED1FC,#F78DA7)"
                    />
                    <Text
                        fontSize= "2xl"
                        fontWeight= "medium"
                        textAlign= "center"
                        textTransform= "uppercase"
                    >
                        Our Mission & Values 
                    </Text>
                    <Text
                        w = "xl"
                        m = "0 auto"
                        mt = "1em"
                        textAlign= "center"
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Ad enim tempora beatae eveniet autem, sit iure fugit 
                        natus eius voluptatum excepturi laborum, ab neque odio 
                        saepe non illum unde! Itaque!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Ad enim tempora beatae eveniet autem, sit iure fugit 
                        natus eius voluptatum excepturi laborum, ab neque odio 
                        saepe non illum unde! Itaque!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Ad enim tempora beatae eveniet autem, sit iure fugit 
                        natus eius voluptatum excepturi laborum, ab neque odio 
                        saepe non illum unde! Itaque!
                    </Text>
                    <Divider 
                        h = "2em"
                        w = "3px"
                        m = "1em auto"
                        backgroundImage="linear-gradient(45deg, #8ED1FC,#F78DA7)"
                    />
                    <Heading
                        textAlign= "center"
                    >
                        The Team
                    </Heading>
                    <Box
                        // m = "0 auto"
                        mt = "2em"
                        ml  = "9%"
                        boxSize= "lg"
                        position= "relative"
                    >
                        <Image 
                            borderRadius= "xl"
                            h= "100%"
                            src = "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <Box
                            w = "md"
                            p = "2em"
                            bg = "gray.100"
                            top= "15%"
                            right= "-80%"
                            // bottom = "-15%"
                            // left= "11%"
                            position= "absolute"
                            borderRadius= "xl"
                            boxShadow= "xl"
                        >
                            <Heading
                                size= "lg"
                            >
                                Smiba
                            </Heading>
                            <Text>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Exercitationem voluptatum doloremque magnam sapiente 
                                provident, laudantium veniam similique cum obcaecati 
                                aperiam libero optio numquam sit suscipit ducimus ipsa 
                                ratione molestiae? Tempore.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Exercitationem voluptatum doloremque magnam sapiente 
                                provident, laudantium veniam similique cum obcaecati 
                                aperiam libero optio numquam sit suscipit ducimus ipsa 
                                ratione molestiae? Tempore.
                            </Text>
                        </Box>
                    </Box>
                </SectionContent>
            </Section>
        </>
    )
}

export default About;
