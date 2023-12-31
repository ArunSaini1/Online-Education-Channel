import { Box, Button, Grid, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import CourseModal from '../CourseModal'
import { useDisclosure } from '@chakra-ui/react'


export default function AdminCourses() {
  const Users = ()=>{
  }


    const courses = [{
_id:"asdfgmhn",
title:"React Course",
category:"Web Development",
poster:{
  url:"active"
},
createdBy:"Arun Saini",
views:123,
numOfVideos:12
    }]

    const courseDetailsHandler = userId=>{
    onOpen()
      };
    const deleteButtonHandler = userId=>{
      console.log(userId);
    };

    const addLectureHandler = (e,courseId,title,description,video)=>{
      e.preventDefault();

    }
    const deleteLectureButtonHandler = (courseId,lectureId)=>{
console.log(courseId);
console.log(lectureId);
    }


    const {isOpen,onClose,onOpen} = useDisclosure()
  
  function Row({item,courseDetailsHandler,deleteButtonHandler}){
    return (
      <Tr>
        <Td>#{item._id}</Td>
        <Td>
          <Image src={item.poster.url} />
        </Td>
        <Td>{item.title}</Td>
        <Td textTransform={'uppercase'}>{item.category}</Td>
        <Td>{item.createdBy}</Td>
        <Td isNumeric>{item.views}</Td>
        <Td isNumeric>{item.numOfVideos}</Td>
        <Td isNumeric>
<HStack justifyContent={'flex-end'}>
  <Button onClick={()=>courseDetailsHandler(item._id)} variant={'outline'} color='purple.500'>View Lectures</Button>
  <Button onClick={()=>deleteButtonHandler(item._id)} color={'purple.600'}><RiDeleteBin7Fill/></Button>
</HStack>
        </Td>
      </Tr>
    )
  }
  return (
    <>
             <Grid minH={'100vh'} templateColumns={['1fr','5fr 1fr']} >
        <Box p={['0','8']} overflow='auto'>
          <Heading textTransform={'uppercase'} children="All Users " my='16' textAlign={['center','left']} />
          <TableContainer w={['100vw','full']}>
            <Table variant={'simple'} size='lg'>
              <TableCaption>All available Courses in the database</TableCaption>
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Poster</Th>
                  <Th>Title</Th>
                  <Th>Category</Th>
                  <Th>Creator</Th>
                  <Th isNumeric>Views</Th>
                  <Th isNumeric>Lectures</Th>
                  <Th isNumeric>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
              {
                courses.map(item=>(
                    <Row key={item._id} item={item} courseDetailsHandler={courseDetailsHandler} deleteButtonHandler={deleteButtonHandler} />
                  ))
              }
              </Tbody>
            </Table>
          </TableContainer>
          <CourseModal isOpen={isOpen} onClose={onClose} deleteButtonHandler={deleteLectureButtonHandler} addLectureHandler={addLectureHandler} id={'asdfghj'} courseTitle="React Course" />
        </Box>
        <Sidebar/>
      </Grid>
    </>
  )
}
