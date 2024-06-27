import React, { useState } from 'react'
import './Login.css'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';

function Login() {

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    pic: ''
  });


  const handleClick = async (e) => {
    setShow(!show)
  };

  const onChangeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

  };


  const [show, setShow] = useState(false);

  return (
    <VStack spacing='5px'>

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

      <Button colorScheme='blue' width={'100%'} margin={{ marginTop: 15 }} onClick={submitHandler}>Login</Button> 

    </VStack >
  )
}

export default Login