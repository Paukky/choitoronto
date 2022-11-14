import * as React from "react"
import {ChakraProvider,theme,} from "@chakra-ui/react"
import { Navbar } from "./layout/Navbar"
import { Landing } from "./components/Landing"
import { Menu } from "./components/Menu"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export const App = () => (


  <ChakraProvider theme={theme}>
    <Router>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/menu" element={<Menu/>}/>
      </Routes>
    </Router>
  </ChakraProvider>
)
