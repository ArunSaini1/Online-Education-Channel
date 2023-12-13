import { Box, Container, Heading, VStack, Text, Button } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'
import { RiCheckboxCircleFill, RiErrorWarningFill } from 'react-icons/ri'


export default function PaymentFail() {
  return (
    <>
     <Container h='90vh'  >

<VStack justifyContent={'center'} h='full' spacing={'4'}>
<RiErrorWarningFill size={'5rem'} />
<Heading textTransform={'uppercase'} >Payment Failed</Heading>
<Link to='/subscribe'>
  <Button variant={'ghost'}>Try Again</Button>
</Link>
</VStack>
</Container> 
    </>
  )
}
