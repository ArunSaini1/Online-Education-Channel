import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {TiSocialYoutubeCircular,TiSocialInstagramCircular} from 'react-icons/ti'
import {DiGithub} from 'react-icons/di'

export default function Footer() {
  return (
    <>
     <Box padding={'4'} bg='blackAlpha.900' minH={'10vh'} >
        <Stack direction={['column','row']}>
        <VStack alignItems={['center','flex-start']} width='full'>
    <Heading children='All Right Reserved' color={'white'} />
    <Heading children='@Arun Saini' color={'yellow.400'} size='sm' />
        </VStack>
        <HStack spacing={['2','10']} justifyContent='center' color={'white'} fontSize='50'>
            <a href='www.youtube.com' target={'_blank'}><TiSocialYoutubeCircular/></a>
            <a href='www.instagram.com' target={'_blank'}><TiSocialInstagramCircular/></a>
            <a href='www.github.com' target={'_blank'}><DiGithub/></a>
        </HStack>
        </Stack>
     </Box> 
    </>
  )
}