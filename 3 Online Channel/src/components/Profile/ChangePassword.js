import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

export default function ChangePassword() {

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

  return (
    <>
     <Container py='16' minH={'90vh'}>
        <form>
            <Heading children="Change Password" my='16' textAlign={['center','left']} />
            <VStack spacing={'8'}>
            <Input required id='password' onChange={e=>setOldPassword(e.target.value)} placeholder='Enter Your Old Password' type={'password'} focusBorderColor='yellow.500' value={oldPassword} />
            <Input required id='password' onChange={e=>setNewPassword(e.target.value)} placeholder='Enter Your New Password' type={'password'} focusBorderColor='yellow.500' value={newPassword} />
            <Button w='full' colorScheme='yellow' type='submit' >Change</Button>
            </VStack>
        </form>
     </Container> 
    </>
  )
}
