import React from 'react'
import { Container, HStack, Image, IconButton,Link} from '@chakra-ui/react'
import {Link as RouteLink} from 'react-router-dom'
import Logo from '../assets/Logo.png'
import {BsFacebook, BsInstagram} from 'react-icons/bs';
import {SiUbereats, SiDoordash} from 'react-icons/si'
import { Skipthedish } from '../assets/SkiptheDish';

export const Navbar = () => {
  return (
    <Container maxW='container.lg'  centerContent>
      <Link as={RouteLink} to={'/'}>
        <Image src={Logo}/>
      </Link>
        <HStack spacing={'1em'} marginY={'1em'}>
            <Link href={'https://www.instagram.com/choi.toronto/'} isExternal>
              <IconButton aria-label='Instagram' icon={<BsInstagram/>} isRound={true} fontSize='20px' bgColor={'#382F5C'} color={'white'}/>
            </Link>
            <Link href={'https://www.facebook.com/choirestaurantto'} isExternal>
              <IconButton aria-label='Facebook' icon={<BsFacebook/>} isRound={true} fontSize='20px' bgColor={'#382F5C'}  color={'white'}/>
            </Link>
            <Link href={'shorturl.at/bcoBU'} isExternal> 
              <IconButton aria-label='UberEats' icon={<SiUbereats/>} isRound={true} fontSize='20px' bgColor={'#382F5C'}  color={'white'}/>
            </Link>
            <Link href={'shorturl.at/axAI5'} isExternal> 
              <IconButton aria-label='Doordash' icon={<SiDoordash/>} isRound={true} fontSize='20px' bgColor={'#382F5C'}  color={'white'}/>
            </Link>
            <Link href={'https://www.skipthedishes.com/choi-vietnamese-street-eats'} isExternal> 
              <IconButton aria-label='SkiptheDish' icon={<Skipthedish/>} isRound={true} fontSize='20px' bgColor={'#382F5C'}  color={'white'}/>
            </Link>
        </HStack>
    </Container>
  )
}