import { Container, Heading, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Avatar, Box, Button, FormLabel, Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Request() {

    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [course,setCourse] = useState('')


  return (
    <>
     <Container h='92vh'>
        <VStack h='full' justifyContent={'center'} spacing='16'>
            <Heading children='Request New Course'/>
            <form style={{width:'100%'}}>
           <Box my={'4'}>
           <FormLabel htmlFor='name' children="Name" />
            <Input required id='name' onChange={e=>setName(e.target.value)} placeholder='Abc' type={'text'} focusBorderColor='yellow.500' />
           </Box>

           <Box my={'4'}>
           <FormLabel htmlFor='email' children="Email Address" />
            <Input required id='email' onChange={e=>setEmail(e.target.value)} placeholder='abc@gmail.com' type={'email'} focusBorderColor='yellow.500' />
           </Box>

           <Box my={'4'}>
           <FormLabel htmlFor='course' children="course" />
            <Textarea required id='course' onChange={e=>setCourse(e.target.value)} placeholder='Explain The Course'  focusBorderColor='yellow.500' />
           </Box>


           <Button my='4' colorScheme='yellow' type='submit'>Send Message</Button>

           <Box my='4'>See Available Courses!?{''} <Link to='/courses'>
            <Button colorScheme={'yellow'} variant='link'>Click</Button>{''} here
           </Link></Box>

          
            </form>
        </VStack>
     </Container> 
    </>
  )
}
