import React from 'react'
import { Box,Container,Image } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Background from '../assets/background3.jpg'
import MainMenu from '../assets/Main-Menu.png'
import Drinks from '../assets/Drinks.png'
export const Food = () => {
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'} backgroundImage={Background} backgroundSize={'cover'} backgroundPosition={'center'} >
         <Tabs isFitted variant={'solid-rounded'} size={'lg'} colorScheme={'purple'}>
            <TabList mb={'1em'}>
                <Tab>Main Menu</Tab>
                <Tab>Drinks</Tab>
            </TabList>
            <TabPanels display={'flex'} justifyContent={'center'}>
                <TabPanel >
                    <Image src={MainMenu} maxHeight={'80vh'}/>
                </TabPanel>
                <TabPanel >
                    <Image src={Drinks} />
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Box>
  )
}

