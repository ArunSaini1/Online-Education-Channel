import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'


export default function UpdateProfile() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

  return (
    <>
     <Container py='16' minH={'90vh'}>
        <form>
            <Heading children="Update Profile" my='16' textAlign={['center','left']} />
            <VStack spacing={'8'}>
            <Input  id='name' onChange={e=>setName(e.target.value)} placeholder='Abc' type={'text'} focusBorderColor='yellow.500' value={name} />
            <Input  id='email' onChange={e=>setEmail(e.target.value)} placeholder='Abc@gmail.com' type={'email'} focusBorderColor='yellow.500' value={email} />
            <Button w='full' colorScheme='yellow' type='submit' >Update</Button>
            </VStack>
        </form>
     </Container>  
    </>
  )
}
