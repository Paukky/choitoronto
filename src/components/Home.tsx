import { Box, Image, Spacer, Text, } from '@chakra-ui/react'
import React from 'react'
import Feast from '../assets/Feast.png'

import { Container, HStack,IconButton,Link} from '@chakra-ui/react'
import Logo from '../assets/Logo.png'
import {BsFacebook, BsInstagram} from 'react-icons/bs';
import {SiUbereats, SiDoordash} from 'react-icons/si'
import { Skipthedish } from '../assets/SkiptheDish';
export const Home = () => {
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'} backgroundImage={Feast} backgroundSize={'cover'} backgroundPosition={'center'}maxHeight={'100vh'}>
        <Container maxW={'container.xl'} centerContent>
            <Box>
              <Image src={Logo} />
            </Box>
            <HStack spacing={3} my={'0.5em'}>
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
            <Text fontSize={"1.5rem"} fontStyle={'italic'}  textAlign={'center'} color={'white'}><b>"We share our fond memories of the Vietnamese streets, in food language"</b></Text>
        </Container>       
        <Spacer/>
    </Box>
  )
}

