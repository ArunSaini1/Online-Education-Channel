import React from 'react'
import { Heading, Stack, VStack ,Text, Button,Image, Box, HStack} from '@chakra-ui/react'
import './home.css'
import { Link } from 'react-router-dom'
import vg from '../../assest/images/1.png'
import {CgGoogle,CgYoutube} from 'react-icons/cg'
import {SiCoursera,SiUdemy} from 'react-icons/si'
import {DiAws} from 'react-icons/di'
import introVideo from '../../assest/videos/intro.mp4'


export default function Home() {
  return (
    <>
    <section className='home'>
        <div className='container'>
        <Stack
        direction={["column","row"]}
        height="100%"
        justifyContent={["center",'space-between']}
        alignItems="center"
        spacing={['16','56']}>

    <VStack width={"full"} alignItems={['center','flex-end']}>
        <Heading children="Learn From Arun" size={"2xl"} />
        <Text children="Find Valuable Content At Reasonable Price" />
        <Link to='/courses'> 
        <Button size={'lg'} colorScheme='yellow'>Explore Now</Button>
        </Link>
    </VStack>

    <Image className='vector-graphics' boxSize={'md'} src={vg} objectFit="contain"/>
        </Stack>
        </div>
<Box padding={"8"} bg="blackAlpha.800">
  <Heading textAlign={"center"} color={"yellow.400"} children="OUR BRANDS"/>  
  <HStack className='brandsBanner' justifyContent={'space-evenly'} marginTop={"4"}>
    <CgGoogle/>
    <CgYoutube/>
    <SiCoursera/>
    <SiUdemy/>
    <DiAws/>
  </HStack>
</Box>

    </section>
    
{/* <div className='container2'>
    <video  controls controlsList='nodownload nofullscreen noremoteplayback' disablePictureInPicture disableRemotePlayback src={introVideo}>

    </video>
</div> */}
</>
  )
}
