import * as React from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage.jsx'
import Chatpage from './Pages/Chatpage/Chatpage.jsx'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/chats" element={<Chatpage/>} />
      </Routes>
      </div>
    </ChakraProvider>
  )
}

export default App
