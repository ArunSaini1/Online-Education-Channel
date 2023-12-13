import { Button, Container, HStack, Heading, Input, Stack, Text, VStack, Image} from '@chakra-ui/react'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Courses() {
    const [keyword,setKeyword] = useState("");
    const [category,setCategory] = useState("");

    const addToPlaylistHandler = ()=>{

       console.log("added to playlist");  
    }

    const Course = ({views,title,imageSrc,id,addToPlaylistHandler,creator,description,lectureCount})=>{
        return (
            <VStack className='course' alignItems={["center","flex-start"]}>
        <Image src={imageSrc} boxSize='60' objectFit={'contain'} />
         <Heading size={'sm'} textAlign={['center','left']} maxW='200px' noOfLines={3} children={title} />
           <Text children={description} noOfLines={2} />
           <HStack>
           <Text fontWeight={'bold'} textTransform={'uppercase'} children={'Creator'} noOfLines={2} />

           <Text fontFamily={'body'} textTransform={'uppercase'} children={creator} noOfLines={2} />

           </HStack>


           <Heading textAlign={'center'} size='xs' children={`Lectures - ${lectureCount}`} textTransform={'uppercase'} />
           
           <Heading  size='xs' children={`Views - ${views}`} textTransform={'uppercase'} />


<Stack direction={['column','row']} alignItems='center'>
<Link to={`/course/${id}`}>
    <Button colorScheme={'yellow'}>Watch Now</Button>
</Link>

<Button variant={'ghost'} colorScheme={'yellow'} onClick={()=>addToPlaylistHandler(id)}>Add To Playlist</Button>

</Stack>
            </VStack>
        )
    }

    const categories = [

        "Web Development","AI","Data Structure","App Development ","Game Development"
    ]
  return (
    <>
      <Container minH={"95vh"} maxWidth="container.lg" paddingY={'8'}>

        <Heading children='All Courses' m={'8'} />
        <Input value={keyword} onChange={e=>setKeyword(e.target.value)} placeholder='Search a course' type={'text'} focusBorderColor='yellow.500'/>
        <HStack overflowX={'auto'} paddingY='8'>
            {categories.map((item,index)=>(
                <Button key={index} onClick={()=>setCategory(item)} minW={'60'}>
                <Text children={item} />
            </Button>
            ))}
        </HStack>


        <Stack direction={["column","row"]} flexWrap="wrap" justifyContent={["flex-start","space-evenly"]} alignItems={["center","flex-start"]}>


<Course 
title={"sample"}
description={"sample"}
views={23}
imageSrc={"sample"}
Id={"sample"}
creator={"sample"}
lectureCount={2} 
addToPlaylistHandler={addToPlaylistHandler}
/>
            
        </Stack>
      </Container>
    </>
  )
}
