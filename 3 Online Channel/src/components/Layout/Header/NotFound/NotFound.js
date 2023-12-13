import React from 'react'
import { Box, Container, Heading, VStack, Text, Button } from '@chakra-ui/react'
import { RiCheckboxCircleFill, RiErrorWarningFill } from 'react-icons/ri'
import {Link} from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <Container h='90vh'  >

        <VStack justifyContent={'center'} h='full' spacing={'4'}>
        <RiErrorWarningFill size={'5rem'} />
        <Heading  >Page Not Found</Heading>
        <Link to='/'>
          <Button variant={'ghost'}>Go to Home</Button>
        </Link>
      </VStack>
     </Container>  
    </>
  )
}
