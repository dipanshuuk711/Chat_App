import React, { useEffect, useState } from 'react'
import './Signup.css'
import { FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, Button } from '@chakra-ui/react'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [pic, setPic] = useState('')
  const [loading, setLoading] = useState(false)

  const toast = useToast()
  const navigate = useNavigate()

  const postDetails = async (pic) => {
    setLoading(true)
    if (!pic) {
      toast({
        title: "Please Select an Image",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      })
      setLoading(false)
      return
    }
    if (pic.type === 'image/jpeg' || pic.type === 'image/png') {
      const data = new FormData()
      data.append("file", pic)
      data.append("upload_preset", "Chat_App")
      data.append("cloud_name", "db3cyowm1")
      try {
        const res = await fetch("https://api.cloudinary.com/v1_1/db3cyowm1/image/upload", { method: 'post', body: data })
        const newdata = await res.json()
        setPic(data.url)
        setLoading(false)
      } catch (err) {
        console.log(err)
        toast({
          title: "Error uploading image",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        })
        setLoading(false)
      }
    } else {
      toast({
        title: "Please Select an Image",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      })
      setLoading(false)
      return
    }
  }

  const [show, setShow] = useState(false)

  const handleClick = async (e) => {
    setShow(!show)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    if (!name || !email || !password || !confirmPassword) {
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
    if (password !== confirmPassword) {
      toast({
        title: "Passwords do not match",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      })
      setLoading(false)
      return
    }
    setLoading(true)
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      }
      const response = await axios.post("http://127.0.0.1:3000/api/user", { name, email, password, pic }, config)
      toast({
        title: "Registration successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      })
      localStorage.setItem('userInfo', JSON.stringify(response.data))
      setLoading(false)
      navigate('/chats')
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      })
      setLoading(false)
    }
  }

  return (
    <VStack spacing='5px'>
      <FormControl id='name' isRequired>
        <FormLabel>Name</FormLabel>
        <Input placeholder='Enter Your Name' name='name' onChange={(e) => setName(e.target.value)}></Input>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder='Enter Your Email' type='email' name='email' onChange={(e) => setEmail(e.target.value)}></Input>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input placeholder='Enter Your Password' id='password' type={show ? 'text' : 'password'} name='password' onChange={(e) => setPassword(e.target.value)}></Input>

          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "hide" : "show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <Input placeholder='Confirm Your Password' id='confirmPassword' type='password' name='confirmPassword' onChange={(e) => setConfirmPassword(e.target.value)}></Input>
      </FormControl>

      <FormControl id='pic' isRequired>
        <FormLabel>Profile Picture</FormLabel>
        <Input type='file' p='1.5' accept='image/*' name='pic' onChange={(e) => postDetails(e.target.files[0])}></Input>
      </FormControl>

      <Button colorScheme='blue' isLoading={loading} width={'100%'} margin={{ marginTop: 15 }} onClick={submitHandler}>Sign Up</Button>

    </VStack >
  );
}

export default Signup;