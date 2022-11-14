import React from 'react'
import { Container,Stack,Text,Box,Icon,Image, chakra, Button,LinkOverlay } from '@chakra-ui/react'
import {Link as RouteLink} from 'react-router-dom'
import Transparent from '../styled/Carousel'
import Carousel from '@itseasy21/react-elastic-carousel';

import BBQ from '../assets/BBQ.png'
import Clam from '../assets/Clam.png'
import Food from '../assets/Food.png'
import Meal from '../assets/Meal.png'
import Salad from '../assets/Salad.png'

import {MdDeliveryDining, MdRestaurantMenu} from 'react-icons/md'
import {GiPartyPopper} from 'react-icons/gi'
import {FaGlassCheers} from 'react-icons/fa'
import '../styled/SliderStyle.css'

export const Landing = () => {

    const Slider = chakra(Carousel);

    return (
        <Container maxWidth={{base:'container.sm', md:'container.lg'}} marginY={'1em'} centerContent >
            <Text textAlign={'center'} fontSize={'4xl'} maxWidth={'35ch'} color={'red.600'}><b>We share our fond memories of the Vietnamese streets, in food language</b></Text>
            <Stack marginY={'1em'} direction={{base:'column', md:'row'}} spacing={'20px'}>
                <Box display={'flex'} alignItems={'center'} flexDirection={{base:'column', md:'row'}}>
                    <Icon as={MdDeliveryDining} fontSize={'6xl'} marginRight={{ base: 'none',md:'0.5em'}}/>
                    <Text maxWidth={'30ch'} textAlign={'center'} color={'red.600'}>Delivery on UberEats, SkipTheDish, DoorDash</Text>
                </Box>
                <Box display={'flex'} alignItems={'center'} justifyItems={'center'} flexDirection={{base:'column', md:'row'}}>
                    <Icon as={GiPartyPopper} fontSize={'6xl'} marginRight={{ base: 'none',md:'0.5em'}} />
                    <Text maxWidth={'30ch'} color={'red.600'}>Party reservation available</Text>
                </Box>
                <Box display={'flex'} alignItems={'center'} flexDirection={{base:'column', md:'row'}}>
                    <Icon as={FaGlassCheers} fontSize={'6xl'} marginRight={{ base: 'none',md:'0.5em'}}/>
                    <Text maxWidth={'30ch'} color={'red.600'}>Alcohol is available</Text>
                </Box>
            </Stack>   
            <Box display={'flex'} marginY={'1em'} flexDirection={{base:'column-reverse', md:'row'}}>

                <Box flexDirection={'column'} flexWrap={'wrap'} marginX={'1em'}>
                    <Text fontSize={'6xl'} textAlign={'center'} color={'red.600'}>Our Story</Text>
                    <Text my={'0.5em'} textAlign={'center'} maxWidth={{base:'none',md:'35ch'}} color={'red.600'}>
                        We’re a group of 4 lost individuals with different occupations. Still, when we came together, we realized we all have something in common, <i>our love for Vietnamese food,</i> especially <b>Vietnamese street food.</b>
                    </Text>
                    <Text my={'0.5em'} textAlign={'center'} maxWidth={{base:'none',md:'35ch'}} color={'red.600'}>
                        Over the years, Pho has always been everyone’s #1 choice when we speak of Vietnamese food. We’re not satisfied yet.<b> We want to introduce you to more specialties, cultural desserts, snacks and other appetizers that have been overlooked.</b>
                        
                    </Text>
                    <Box my={'1em'} display={'flex'} justifyContent={'center'}>
                                          
                            <Button colorScheme={'purple'} leftIcon={<MdRestaurantMenu/>}>
                                <LinkOverlay as={RouteLink} to={'menu'} >  
                                    See Menu
                                </LinkOverlay>     
                            </Button>                  
                        
                    </Box>
                </Box>

                <Slider 
                    marginX={'2em'}
                    width={500}
                    isRTL={false} 
                    enableAutoPlay={true}  
                    enableMouseSwipe={false}
                    transitionMs={1500}
                    autoPlaySpeed={5000}
                    color={'#ffffff'}
                    renderPagination={() => {
                        return(
                            <Transparent/>
                        )}}
                >
                    <Image src={BBQ} h={500}/>
                    <Image src={Clam} h={500}/>
                    <Image src={Food} h={500}/>
                    <Image src={Meal} h={500}/>
                    <Image src={Salad} h={500}/>
                </Slider>
            </Box>
        </Container>
        
    )
}
