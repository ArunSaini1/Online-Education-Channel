import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri'


export default function Users() {
  const Users = ()=>{
  }


    const users = [{
_id:"asdfgmhn",
name:"Arun Saini",
role:"admin",
subscription:{
  status:"active"
},
email:"arun@gmail.com"
    }]

    const updateHandler = (userId)=>{
      console.log(userId);
    };
    const deleteButtonHandler = (userId)=>{
      console.log(userId);
    };

  
  function Row({item,updateHandler,deleteButtonHandler}){
    return (
      <Tr>
        <Td>#{item._id}</Td>
        <Td>{item.name}</Td>
        <Td>{item.email}</Td>
        <Td>{item.role}</Td>
        <Td>{item.subscription.status === 'active' ? 'Active' : 'Not Active'}</Td>
        <Td isNumeric>
<HStack justifyContent={'flex-end'}>
  <Button onClick={()=>updateHandler(item._id)} variant={'outline'} color='purple.500'>Change Role</Button>
  <Button onClick={()=>deleteButtonHandler(item._id)} color={'purple.600'}><RiDeleteBin7Fill/></Button>
</HStack>
        </Td>
      </Tr>
    )
  }
  return (
    <>
             <Grid minH={'100vh'} templateColumns={['1fr','5fr 1fr']} >
        <Box p={['0','16']} overflow='auto'>
          <Heading textTransform={'uppercase'} children="All Users " my='16' textAlign={['center','left']} />
          <TableContainer w={['100vw','full']}>
            <Table variant={'simple'} size='lg'>
              <TableCaption>All available users in the database</TableCaption>
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Role</Th>
                  <Th>Subscription</Th>
                  <Th isNumeric>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
              {
                users.map(item=>(
                    <Row key={item._id} item={item} updateHandler={updateHandler} deleteButtonHandler={deleteButtonHandler} />
                  ))
              }
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Sidebar/>
      </Grid>
    </>
  )
}
