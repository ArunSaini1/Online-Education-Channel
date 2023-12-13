import { Avatar, Box, Button, Container, HStack, Heading, Stack, TabIndicator, Text, VStack, } from '@chakra-ui/react'
import React from 'react'
import arun from '../../a.jpg'
import { Link } from 'react-router-dom'
import { RiSecurePaymentFill } from 'react-icons/ri'


export default function About() {

    const Founder = ()=>{

        <Stack direction={['column','row']} spacing={['4','16']} padding={'8'}>
        <VStack>
            <Avatar boxSize={['40','52']}/>
            <Text children='Co-Founder'  opacity={0.7}/>
        </VStack>

        <VStack>
            <Heading children="Arun Saini" size={['md','xl']} />
            <Text textAlign={['center','left']} children={`Hi, I am a full stack developer.. Our mission is to provide quality content at reasonable price `} />
        </VStack>
        </Stack>
    }
  return (
    <>
     <Container maxW={'container.lg'} padding='16' boxShadow={'lg'}>

      <Heading children="About Us" textAlign={['center','left']} />
      <Stack direction={['column','row']} spacing={['4','16']} padding={'8'}>
        <VStack justifyContent={'center'} alignItems={['center','flex-start']}>
            <Avatar src={arun} boxSize={['40','48']}/>
            <Text children='Co-Founder'  opacity={0.7}/>
        </VStack>

        <VStack>
            <Heading children="Arun Saini" size={['md','xl']} />
            <Text fontStyle={'cursive'} m='8'  textAlign={['center','left']} children={`Hi, I am a full stack developer.. Our mission is to provide quality content at reasonable price `} />
        </VStack>
        </Stack>

<Stack m='8' direction={['column','row']} alignItems='center'>

    <Text>
        We are a video streaming platform with some premium courses available only for premium users.
    </Text>

    <Link to='/subscribe'>
        <Button variant={'ghost'} colorScheme='yellow'>CheckOut Our Plan</Button>
    </Link>
</Stack>

<Box>
    <Heading size={'md'} children="Terms & Condition" textAlign='center'  my={'4'} />
    <Box h='sm' p='4'>
<Text textAlign={['center','left']}>



</Text>
<Heading my='4' size={'xs'} children=" Refund Only applicable for cancelation within 3 days" />

    </Box>
</Box>

   <HStack my={'4'} p={'4'}>
    <RiSecurePaymentFill/>
    <Heading size={"xs"} textTransform={"uppercase"} children={"Payment is secured by Razorpay"}/>
   </HStack>
     </Container> 
    </>
  )
}
