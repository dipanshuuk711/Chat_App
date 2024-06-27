import React from 'react'
import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import Login from '../../components/Authentication/Login/Login'
import Signup from '../../components/Authentication/SignUp/Signup'

export default function Homepage() {
     return (
          <Container maxW='md' borderRadius={'md'} bg='blue.900' minH='50vh' mb={'10px'} mt='10px' color='white' centerContent>
               <Box
                    d="flex"
                    justifyContent="center"
                    textAlign="center"
                    p={3}
                    w='100%'
                    m='10px 0 15px 0px'
                    borderRadius='lg'
                    borderWidth='1px'
               >
                    <Text fontSize='3xl' fontFamily='Work sans'>Talk-A-Tive</Text>
               </Box>
               <Box bg='white' color={'black'} width={'90%'} borderRadius={"lg"} borderWidth={'1px'}>
                    <Tabs variant='soft-rounded' >
                         <TabList mb='1em'>
                              <Tab width="50%">Login</Tab>
                              <Tab width="50%">Signup</Tab>
                         </TabList>
                         <TabPanels>
                              <TabPanel>
                                   <Login/>
                              </TabPanel>
                              <TabPanel>
                                   <Signup/>
                              </TabPanel>
                         </TabPanels>
                    </Tabs>
               </Box>
          </Container>
     )
}
