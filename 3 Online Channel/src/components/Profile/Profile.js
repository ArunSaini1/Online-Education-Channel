import { Avatar, Button, Container, HStack, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function Profile() {

    const {isOpen,onClose,onOpen} = useDisclosure()

   

    function ChangePhotoBox({isOpen,onClose,changeImageSubmitHandler}){

        const [image,setImage] = useState('');
        const [imagePrev,setImagePrev] = useState('');

        const closeHandler = ()=>{
            onClose();
            setImagePrev("");
            setImage("");
    }


        const changeImage = (e)=>{
            const file = e.target.files[0];
            const reader = new FileReader();
    
            reader.readAsDataURL(file);
    
            reader.onload=()=>{
                setImagePrev(reader.result);
                setImage(file)
    
            }
        }
        return (
         <Modal isOpen={isOpen}  onClose={closeHandler} >
            <ModalOverlay backdropFilter={'blur(10px)'} />
            <ModalContent>
            <ModalHeader>Change Photo</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Container>
                        <form onSubmit={e=>changeImageSubmitHandler(e,image)}>
                            <VStack spacing={'8'}>
                                { imagePrev && <Avatar src={imagePrev} boxSize={'48'} />}
                                <Input type={'file'} onChange={changeImage} />
                                <Button w='full' colorScheme='yellow' type='submit' >Change</Button>
                            </VStack>
                        </form>
                    </Container>
                </ModalBody>
<ModalFooter>
    <Button mr='3' onClick={closeHandler}>Cancel</Button>
</ModalFooter>
            </ModalContent>
         </Modal>   
        )
    }

    const user = {
        name:"Arun",
        email:"arun@gmail.com",
        createdAt: String(new Date().toISOString()),
        role:'user',
        subscription:{
            status:"active"
        },
        playlist:[
            {
                course:"asdfg",
                poster:'cvb'
            }
        ]
    }

    const removefromPlaylistHandler = id =>{
        console.log(id);
    }

    const changeImageSubmitHandler = (e,image)=>{
        e.preventDefault();
        console.log(image);
    };

   
  return (
    <>
     <Container minH={'95vh'} maxW='container.lg' py='8' >
        <Heading children='Profile' m='8' textTransform={'uppercase'} />
        <Stack
        justifyContent={'flex-start'} direction={['column','row']}
        alignItems={'center'} spacing={['8','16']} padding='8'>
<VStack>
    <Avatar boxSize={'48'} />
    <Button colorScheme={'yellow'} variant={'ghost'} onClick={onOpen} >Change Photo</Button>
</VStack>


<VStack spacing={'4'} alignItems={['center','flex-start']} >
<HStack>
    <Text children='Name' fontWeight={'bold'} />
    <Text children={user.name} />
</HStack>
<HStack>
    <Text children='Email' fontWeight={'bold'} />
    <Text children={user.email} />
</HStack>

<HStack>
    <Text children='CreatedAt' fontWeight={'bold'} />
    <Text children={user.createdAt.split("T")[0]} />
</HStack>


{user.role !== 'admin' && (
    <HStack>

<Text children="Subscription" fontWeight={'bold'} />
{user.subscription.status === 'active'?(
    <Button colorScheme={'yellow'} variant='unstyled'>Cancel Subscription</Button>
):(
    <Link to='/subscribe'>
        <Button colorScheme={'yellow'}>Subscribe</Button>
    </Link>
)}

    </HStack>
)}

<Stack direction={['column','row']} alignItems={'center'}>
<Link to='/updateprofile'>
    <Button>Update Profile</Button>
</Link>


<Link to='/changepassword'>
    <Button>Change Password</Button>
</Link>

</Stack>



</VStack>


        </Stack>


        <Heading children='Playlist' size={'md'} my='8' />
        {
            user.playlist.length>0 && (
<Stack direction={['column','row']} alignItems={'center'} p='4' flexWrap='wrap' >
{
    user.playlist.map((element)=>(
        <VStack w='48' m='2' key={element.course } >
            <Image boxSize={'full'} objectFit={'contain'} src={element.poster} />

            <HStack>
                <Link to={`/course/${element.course}`}>

                    <Button variant={'ghost'} colorScheme='yellow'>Watch Now</Button>
                </Link>

                <Button onClick={()=>removefromPlaylistHandler(element.course)}><RiDeleteBin7Fill/></Button>
            </HStack>
        </VStack>
    ))
}
</Stack>

            )
        }


        <ChangePhotoBox changeImageSubmitHandler={changeImageSubmitHandler} isOpen={isOpen} onClose={onClose}/>
     </Container> 
    </>
  )
}
