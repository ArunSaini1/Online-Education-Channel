import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function Header() {
    const {isOpen,onOpen,onClose} = useDisclosure();

    const isAuthenticated = true;
    const user = {
        role:'admin'
    };

    const logoutHandler = ()=>{
        console.log("Logout");
        onclose()
    }
    const LinkButton = ({url='/',title='Home' })=>{
        <Link to={url}><Button variant={'ghost'}>{title}</Button></Link>

    }
  return (
    <>
      <Button onClick={onOpen} colorScheme={'yellow'} width='12' height={'12'} rounded='full' position={'fixed'}
      top={'6'} left={'6'}>
        <RiMenu5Fill/>
      </Button>

      <Drawer placement='left' isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter={'blur(3px)'}/>
        <DrawerContent>

         <DrawerHeader borderBottomWidth={'1px'}>COURSE BUNDLER</DrawerHeader>  
         <DrawerBody>

            <VStack spacing={'8'} alignItems={'flex-start'}>
            <Link onClick={onClose} to='/'>Home</Link>
            <Link onClick={onClose} to='/courses'>Browse All Corses</Link>
            <Link onClick={onClose} to='/request'>Request A Course</Link>
            <Link onClick={onClose} to='/contact'>Contact Us</Link>
            <Link onClick={onClose} to='/about'>About</Link>

            <HStack justifyContent={'space-evenly'} position='absolute' bottom={'2rem'}
            width='80%'>
{isAuthenticated?(<>

<VStack>

    <HStack>
    <Link onClick={onClose} to='/profile'>
    <Button variant={'ghost'} colorScheme={"yellow"}>Profile</Button>
</Link> 

<Button variant={'ghost'} onClick={logoutHandler} ><RiLogoutBoxLine/>Logout</Button>
    </HStack>

    {

user && user.role=== "admin" && <Link to='/admin/dashboard'>
<Button onClick={onClose} colorScheme={'purple'} variant='ghost'> 
    <RiDashboardFill style={{margin:'4px'}} />
    Dashboard
</Button>

</Link>

    }
</VStack>

</>):(<>

<Link to='/login' onClick={onClose}>
    <Button colorScheme={"yellow"}>Login</Button>
</Link>

<p>OR</p>

<Link to='/register' onClick={onClose}>
    <Button colorScheme={"yellow"}>Sign Up</Button>
</Link>

</>)}
            </HStack>
            </VStack>
         </DrawerBody> 
        </DrawerContent>
      </Drawer>
    </>
  )
}

