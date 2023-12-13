import { Avatar, Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [imagePrev,setImagePrev] = useState('')
    const [image,setImage] = useState('')

    const changeImageHandler = (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload=()=>{
            setImagePrev(reader.result);
            setImage(file)

        }
    }

  return (
    <>
     <Container h={'98vh'}>
        <VStack h={'cover'} justifyContent='center' spacing={'16'}>
            <Heading children={'Registration'} textTransform={'uppercase'} />
            <form style={{width:'100%'}}>

            <Box my='4' display={'flex'} justifyContent='center'>
            <Avatar src={imagePrev} size={'2xl'}/>

            </Box>

            <Box my={'4'}>
           <FormLabel htmlFor='name' children="Name" />
            <Input required id='name' onChange={e=>setName(e.target.value)} placeholder='abc' type={'name'} focusBorderColor='yellow.500' />
           </Box>


           <Box my={'4'}>
           <FormLabel htmlFor='email' children="Email Address" />
            <Input required id='email' onChange={e=>setEmail(e.target.value)} placeholder='abc@gmail.com' type={'email'} focusBorderColor='yellow.500' />
           </Box>

           <Box my={'4'}>
           <FormLabel htmlFor='password' children="password" />
            <Input required id='password' onChange={e=>setPassword(e.target.value)} placeholder='Enter Your Password' type={'password'} focusBorderColor='yellow.500' />
           </Box>

           <Box my={'4'}>
           <FormLabel htmlFor='chooseAvatar' children="Choose Avatar" />
            <Input onChange={changeImageHandler} accept='image/*' required id='chooseAvatar'  type={'file'} focusBorderColor='yellow.500' />
           </Box>
           
           

           <Button my='4' colorScheme='yellow' type='submit'>Sign Up</Button>

           <Box my='4'>Already  User?{''} <Link to='/login'>
            <Button colorScheme={'yellow'} variant='link'>Login Here</Button>{''} here
           </Link></Box>
            </form>
        </VStack>
     </Container> 
    </>
  )
}
