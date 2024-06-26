import React, { useState } from 'react'
import './Signup.css'
import { FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'

function Signup() {

     const [data, setData] = useState({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          pic:''
     })

     const onChangeHandler = (event)=>{
          setData({...data, [event.target.name]: event.target.value})
     }

     return (
          <VStack spacing='5px'>
               <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder='Enter Your Name' name='name' onChange={onChangeHandler}></Input>
               </FormControl>
               <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder='Enter Your Email' type='email' name='email' onChange={onChangeHandler}></Input>
               </FormControl>
               <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input placeholder='Enter Your Password' type='password' name='password' onChange={onChangeHandler}></Input>
               </FormControl>
               <FormControl isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input placeholder='Confirm Your Password' type='password' name='confirmPassword' onChange={onChangeHandler}></Input>
               </FormControl>
               <FormControl isRequired>
                    <FormLabel>Profile Picture</FormLabel>
                    <Input type='file' name='pic' onChange={onChangeHandler}></Input>
               </FormControl>
          </VStack>
     )
}

export default Signup