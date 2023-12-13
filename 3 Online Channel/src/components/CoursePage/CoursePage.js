import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import introVideo from '../../assest/videos/intro.mp4'

export default function CoursePage() {
    // const lectureTitle = 'LectureTitle';
    const [lectureNumber,setLectureNumber] = useState(0);

    const lectures = [{
        _id:"1",
        title:'Sample',
        description:"sampleeee",
        video:{
            url:'qertyui'
        }
    },
    {
        _id:"2",
        title:'Sample2',
        description:"sampleeee",
        video:{
            url:'qertyui'
        }
    },
    {
        _id:"3",
        title:'Sample3',
        description:"sampleeee",
        video:{
            url:'qertyui'
        }
    }]
  return (
    <>
     <Grid minH={'90vh'} templateColumns={['1fr','3fr 1fr']} >
        <Box>
    <video width={'100%'} height={'50vh'}  controls controlsList='nodownload  noremoteplayback' disablePictureInPicture disableRemotePlayback src={introVideo}>

    </video>

    <Heading m='4' children={`#${lectureNumber+1} ${lectures[lectureNumber].title}`} />

<Heading m='4' children='Description' />

<Text m='4' children={lectures[lectureNumber].description} />
        </Box>

        <VStack>
          {lectures.map((element,index)=>(
            <button onClick={()=>setLectureNumber(index)} key={element._id} style={{width:'100%',padding:'1rem',textAlign:'center',margin:0,borderBottom:'1px solid black'}} >
                <Text noOfLines={1}>
                    #{index+1} {element.title}
                </Text>
            </button>
          ))}  
        </VStack>
     </Grid> 
    </>
  )
}
