import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react"
import { ChangeEvent, FormEvent, useState } from "react"

import { useCreateVinylMutation } from "../api/vinyls"

interface Props {
  close: () => void
}

function NewVinyl({ close }: Props) {
  const [createAlbum, { isLoading }] = useCreateVinylMutation()
  const [newAlbumData, setNewAlbumData] = useState({
    artist: '',
    title: '',
    image: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    createAlbum(newAlbumData)
    setNewAlbumData({
      artist: '',
      title: '',
      image: '',
    })
  }

  const handleUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setNewAlbumData({
      ...newAlbumData,
      [e.target.id]: e.target.value
    })
  }

  const allEntered = Boolean(newAlbumData.artist && newAlbumData.title && newAlbumData.image)

  return (
    <Box as='form' onSubmit={handleSubmit} display='flex' justifyContent='center' mb='20px'>
      <Box w='sm'>
        <Heading as='h3' size='md'>New Album</Heading>

        <FormControl display='flex' justifyContent='space-between' alignContent='end' w='100%' m='5px 0'>
          <FormLabel mt='10px'>Artist:</FormLabel>
          <Input type='text' id='artist' w='calc(100% - 100px)' onChange={handleUpdate} value={newAlbumData.artist} />
        </FormControl>

        <FormControl display='flex' justifyContent='space-between' alignContent='end' w='100%' m='5px 0'>
          <FormLabel mt='10px'>Title:</FormLabel>
          <Input type='text' id='title' w='calc(100% - 100px)' onChange={handleUpdate} value={newAlbumData.title} />
        </FormControl>

        <FormControl display='flex' justifyContent='space-between' alignContent='end' w='100%' m='5px 0'>
          <FormLabel mt='10px'>Image URL:</FormLabel>
          <Box  w='calc(100% - 100px)'>
            <InputGroup>
              <Input type='text' id='image' w='calc(100% - 40px)' onChange={handleUpdate} value={newAlbumData.image} />
              <InputRightElement>
              <Image src={newAlbumData.image ? newAlbumData.image : 'https://cdn3.iconfinder.com/data/icons/webdesigncreative/free_icons_64x64_png/Question-mark.png'} alt='image preview'  w='40px' h='40px' backgroundColor='lightgray' />
              {/* TODO: on invalid image, display alt for alt */}
              </InputRightElement>
            </InputGroup>
          </Box>
        </FormControl>
      
        <Box mt='30px' display='flex' justifyContent='space-between'>
          <Button onClick={close}>Cancel</Button>
          <Button type='submit' isDisabled={!allEntered} isLoading={isLoading} loadingText='Saving Album' colorScheme='blue'>Add New Album</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default NewVinyl
