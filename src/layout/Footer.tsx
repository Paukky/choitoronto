import React from 'react'
import { Box, Container, Text,Heading,Icon, Image,  } from '@chakra-ui/react'
import {BsFillTelephoneFill} from 'react-icons/bs';

import Map from '../assets/staticmap.png'
export const Footer = () => {
  return (
    <Box height={'60vh'} bgColor={'#292346'} display={'flex'} alignItems={'center'}>
        <Container centerContent textAlign={'center'} color={'#fff4c8'}>
            <Box display={'flex'} flexDir={'column'} alignItems={'center'}>
                <Heading><u>Contact Us</u></Heading>
                <Box>
                    <Icon as={BsFillTelephoneFill} fontSize={'20px'}/>
                    (416) 293-3188
                </Box>
                <Heading my={2}><u>Hours</u></Heading>
                <Box>
                    <Text><b>Wed - Sun</b> | 5pm - 10:30pm </Text>
                    <Text><b>Brunch: Sun</b> | 11am - 4:30pm</Text>
                </Box>
            </Box>
        </Container>
        <Container textAlign={'center'} color={'#fff4c8'}>
            <Box display={'flex'} flexDir={'column'} alignItems={'center'}>
                <Image src={Map} maxHeight={'30vh'}/>
                <Text>633 Silver Star Blvd Unit #121</Text>
                <Text>Scarborough, ON M1V 5N1</Text>
            </Box>
        </Container>
    </Box>
  )
}

