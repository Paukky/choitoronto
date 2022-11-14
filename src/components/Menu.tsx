import React from 'react'
import { Container,Tabs,Tab,TabList,TabPanel,TabPanels,Image,Grid,GridItem,Text } from '@chakra-ui/react'
import MainMenu from '../assets/Main-Menu.png'
import Drinks from '../assets/Drinks.png'
import Lau27 from '../assets/lau27.png'
import BunDau from '../assets/bundaumamtom.png'
import ChaCa from '../assets/chacalavong.png'
import FsCockTail from '../assets/fishsaucecocktail.png'
import CheThai from '../assets/chethai.png'
import Cocktail from '../assets/cocktailxoailac.png'
import DailySpecial from '../assets/daily-special.png'

export const Menu = () => {
  return (
    <Container width={'container.lg'} centerContent> 
            <Grid
                position={'relative'}
                templateAreas={`"header main"
                                "food main"`}
                gridTemplateRows={'50px 1fr 30px'}
                gridTemplateColumns={'4fr 2fr'}
                width={'200%'}
                gap={2}
                >    
                    <GridItem area={'header'}>
                        <Text fontSize={'4xl'} textAlign="center" color={'red.500'}> <i>Most Popular</i></Text>
                    </GridItem>
                    <GridItem area={'food'}>
                        <Grid templateColumns={'repeat(3,2fr)'} gap={2} >
                            <Image src={Lau27}/>
                            <Image src={BunDau}/>
                            <Image src={ChaCa}/>
                            <Image src={FsCockTail}/>
                            <Image src={CheThai}/>
                            <Image src={Cocktail}/>  
                        </Grid>
                    </GridItem>
                    <GridItem area={'main'}>
                        <Image src={DailySpecial} h={'540px'} mt={'9'}/>
                    </GridItem>
            </Grid>
            
        <Tabs isFitted variant={'solid-rounded'} width={'container.md'} size={'lg'} colorScheme={'red'}>
            <TabList mb={'1em'}>
                <Tab>Main Menu</Tab>
                <Tab>Drinks</Tab>
            </TabList>
            <TabPanels display={'flex'} justifyContent={'center'}>
                <TabPanel >
                    <Image src={MainMenu}/>
                </TabPanel>
                <TabPanel >
                    <Image src={Drinks}/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Container>
  )
}

