import * as React from "react"
import {ChakraProvider,theme,Image,Box} from "@chakra-ui/react"
import { Navbar } from "./layout/Navbar"
import { Landing } from "./components/Landing"
import { Menu } from "./components/Menu"
import Background from "./assets/background6.jpg"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export const App = () => (

  <ChakraProvider theme={theme}>
    <Box w='100%' h='120vh' bgColor={'white'}> 
      <Router>
        <Navbar/> 
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/menu" element={<Menu/>}/>
        </Routes>
      </Router>
    </Box>
  </ChakraProvider>
)
