import React, { useState } from 'react'
import './Signup.css'
import { FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, Button } from '@chakra-ui/react'

function Signup() {

     const [data, setData] = useState({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          pic: ''
     });

     const postDetails = async (pic) => {

     }

     const [show, setShow] = useState(false);

     const handleClick = async (e) => {
          setShow(!show)
     };

     const onChangeHandler = (event) => {
          setData({ ...data, [event.target.name]: event.target.value });
     };

     const submitHandler = async (e) => {
          e.preventDefault();
     };

     return (
          <VStack spacing='5px'>
               <FormControl id='name' isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder='Enter Your Name' name='name' onChange={onChangeHandler}></Input>
               </FormControl>

               <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder='Enter Your Email' type='email' name='email' onChange={onChangeHandler}></Input>
               </FormControl>

               <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                         <Input placeholder='Enter Your Password' type={show ? 'text' : 'password'} name='password' onChange={onChangeHandler}></Input>

                         <InputRightElement width="4.5rem">
                              <Button h="1.75rem" size="sm" onClick={handleClick}>
                                   {show ? "hide" : "show"}
                              </Button>
                         </InputRightElement>
                    </InputGroup>
               </FormControl>

               <FormControl isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input placeholder='Confirm Your Password' type='password' name='confirmPassword' onChange={onChangeHandler}></Input>
               </FormControl>

               <FormControl id='pic' isRequired>
                    <FormLabel>Profile Picture</FormLabel>
                    <Input type='file' p='1.5' accept='image/*' name='pic
                    ' onChange={(e) => postDetails(e.target.files[0])}></Input>
               </FormControl>

               <Button colorScheme='blue' width={'100%'} margin={{ marginTop: 15 }} onClick={submitHandler}>Sign Up</Button>

          </VStack >
     )
}

export default Signup;