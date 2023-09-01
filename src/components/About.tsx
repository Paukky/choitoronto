import React from 'react'
import { Box,Container, Text,Divider, Heading } from '@chakra-ui/react'

export const About = () => {
  return (
    <Box height={'70vh'} bgColor={'#292346'} display={'flex'} alignItems={'center'} >
        <Container maxW={'container.sm'} textAlign={'center'} color={'#fff4c8'} >
            <Heading><ul>About Us</ul></Heading>
            <Text fontSize={'2xl'} my={'1em'}>We’re a group of 4 lost individuals with different occupations. Still, when we came together, we realized we all have something in common, <i>our love for Vietnamese food,</i> especially <b>Vietnamese street food.</b></Text>
            <Divider/>
            <Text fontSize={'2xl'}  my={'1em'}>Over the years, Pho has always been everyone’s #1 choice when we speak of Vietnamese food. We’re not satisfied yet.<b> We want to introduce you to more specialties, cultural desserts, snacks and other appetizers that have been overlooked.</b></Text>
        </Container>
    </Box>
  )
}

