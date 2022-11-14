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
            <Link href={'https://www.ubereats.com/ca/store/choi/SrEwwOLWQuiCu5p3JIRSpg?diningMode=PICKUP&mod=storeDeliveryTime&modctx=%257B%2522entryPoint%2522%253A%2522store-auto-surface%2522%252C%2522encodedStoreUuid%2522%253A%2522SrEwwOLWQuiCu5p3JIRSpg%2522%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjM5JTIwTGV4aW5ndG9uJTIwQXZlJTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyZTYyNDA1MjktMmIxNC1jNWYyLTViNDMtN2RjYzc2N2UxMDBhJTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMnViZXJfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0E0My43NDM3NjM4JTJDJTIybG9uZ2l0dWRlJTIyJTNBLTc5LjU5ODUxNTUlN0Q%3D&ps=1'} isExternal> 
              <IconButton aria-label='UberEats' icon={<SiUbereats/>} isRound={true} fontSize='20px' bgColor={'#382F5C'}  color={'white'}/>
            </Link>
            <Link href={'https://www.doordash.com/store/choi-restaurant-toronto-2386176/'} isExternal> 
              <IconButton aria-label='Doordash' icon={<SiDoordash/>} isRound={true} fontSize='20px' bgColor={'#382F5C'}  color={'white'}/>
            </Link>
            <Link href={'https://www.skipthedishes.com/choi-vietnamese-street-eats'} isExternal> 
              <IconButton aria-label='SkiptheDish' icon={<Skipthedish/>} isRound={true} fontSize='20px' bgColor={'#382F5C'}  color={'white'}/>
            </Link>
        </HStack>
    </Container>
  )
}