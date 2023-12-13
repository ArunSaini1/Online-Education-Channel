import { Box, Container, Heading, VStack, Text, Button } from '@chakra-ui/react'
import React from 'react'

export default function Subscribe() {
  return (
    <>
      <Container h='90vh' p='16' >
        <Heading children='Welcome' my='8' textAlign={'center'} />
        <VStack boxShadow={'lg'} alignItems='stretch' borderRadius={'lg'} spacing='0'>
          <Box bg='yellow' p={'4'}>
            <Text children={'Pro Pack - 299.00 RS'} />
          </Box>

          <Box p='4'>
            <VStack textAlign={'center'} px='8' mt={'4'} spacing='8'>
            <Text color={'black'} children={'Join pro pack and get Access to all content'} />
          <Heading size='md' children={'RS 299 Only'} />
            </VStack>

            <Button my='8' w='full' colorScheme='yellow'>Buy Now</Button>
          </Box>


          <Box bg='blackAlpha.600' p='4'>
          <Heading size='sm' color={'white'} textTransform='uppercase' children={'100% Refund at cancelation'} />
          <Text fontSize={'xs'} color='white' children={"* Terms & Condition Apply"} />
          </Box>
        </VStack>
      </Container>
    </>
  )
}
