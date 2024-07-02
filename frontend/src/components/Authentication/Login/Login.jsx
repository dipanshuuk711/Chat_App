import React, { useEffect, useState } from 'react'
import './Login.css'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, useToast, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Login() {

  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const toast = useToast()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleClick = async (e) => {
    setShow(!show)
  };

  const onChangeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };


  const submitHandler = async (e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      toast({
        title: "Please fill all fields",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      })
      setLoading(false)
      return
    }
    if (!data.password) {
      toast({
        title: "Enter the Password",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      })
      setLoading(false)
      return
    }
    try{
      setLoading(true)
      const response = await axios.post('http://127.0.0.1:3000/api/user/login', data ,{headers :{ "Content-type": "application/json"}})
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      toast({
        title: "Login Successful",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
        })
        setLoading(false)
        navigate('/chats')

    }
    catch (err) {
      toast({
        title: "Invalid Credentials",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      })
      setLoading(false)
    }
  }


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

      <Button isLoading={loading} colorScheme='blue' width={'100%'} margin={{ marginTop: 15 }} onClick={submitHandler}>Login</Button>

    </VStack >
  )
}

export default Login