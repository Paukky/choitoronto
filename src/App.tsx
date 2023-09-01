import * as React from "react"
import {ChakraProvider,theme,Image,Box} from "@chakra-ui/react"
import { Navbar } from "./layout/Navbar"
import { Landing } from "./components/Landing"
import { Menu } from "./components/Menu"
import { Footer } from './layout/Footer'
import { Food } from "./components/Food"
import { About } from "./components/About"
import {Home} from "./components/Home"

export const App = () => (

  <ChakraProvider theme={theme}>
      <Home/>
      <About/>
      <Food/>
      <Footer/>
  </ChakraProvider>
)
