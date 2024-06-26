import React from 'react'
import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'

export default function Homepage() {
     return (
          <Container maxW='md' bg='blue.600' color='white' centerContent>
               <Box
                    d="flex"
                    justifyContent="center"
                    textAlign="center"
                    p={3}
                    w='100%'
                    m='40px 0 15px 0px'
                    borderRadius='lg'
                    borderWidth='1px'
               >
                    <Text fontSize='4xl' fontFamily='Work sans'>Talk-A-Tive</Text>
               </Box>
               <Box>
               </Box>
               <Box bg='white' color={'black'} width={'100%'} borderRadius={"lg"} borderWidth={'1px'}>
                    <Tabs variant='soft-rounded' >
                         <TabList>
                              <Tab>Login</Tab>
                              <Tab>Signup</Tab>
                         </TabList>
                         <TabPanels>
                              <TabPanel>
                                   <p>Login</p>
                              </TabPanel>
                              <TabPanel>
                                   <p>Signup</p>
                              </TabPanel>
                         </TabPanels>
                    </Tabs>
               </Box>
          </Container>
     )
}
