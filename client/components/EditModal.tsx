import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text
} from '@chakra-ui/react'
import { WarningIcon } from '@chakra-ui/icons'
import { ChangeEvent, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { Vinyl } from '../../models'
import { RootState } from "../store"
import { closeModal } from "../store/modalSlice"
import { useDeleteVinylMutation, useUpdateVinylMutation } from '../api/vinyls'

function EditModal() {
  const modalRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()
  const { isOpen, selectedVinyl } = useSelector((state: RootState) => state.modal)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [albumDetails, setAlbumDetails] = useState<Vinyl | null>(null)
  const [updateFunc, { isLoading: isUpdating }] = useUpdateVinylMutation()
  const [deleteFunc, { isLoading: isDeleting }] = useDeleteVinylMutation()

  useEffect(() => {
    if (selectedVinyl) setAlbumDetails(selectedVinyl)
  }, [selectedVinyl])

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus()
    }
  }, [isOpen])

  const handleClose = () => {
    setConfirmDelete(false)
    setAlbumDetails(null)
    dispatch(closeModal())
  }

  const handleDelete = async () => {
    await deleteFunc(albumDetails?.id) // TODO: .unwrap() and error handle
    handleClose()
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (confirmDelete) setConfirmDelete(false)
    if (albumDetails){
      setAlbumDetails({
        ...albumDetails,
        [e.target.id]: e.target.value
      })
    }
  }

  const handleSave = async () => {
    if (albumDetails){
      await updateFunc({ id: albumDetails.id, newDetails: albumDetails }) // TODO: .unwrap() and error handle
      handleClose()
    }
  }

  if (!isOpen || !selectedVinyl) return null

  const artistUpdated = albumDetails?.artist !== selectedVinyl.artist
  const titleUpdated = albumDetails?.title !== selectedVinyl.title
  const imageUpdated = albumDetails?.image !== selectedVinyl.image
  const someUpdate = artistUpdated || titleUpdated || imageUpdated

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Vinyl</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex justify='center' mb='10px'>
            <Image src={albumDetails?.image} w='250px' />
          </Flex>
          <form onSubmit={handleSave} aria-describedby='save-button'>
            <FormControl display='flex' alignItems='end' mt='10px'>
              <FormLabel w='105px'>Artist</FormLabel>
              <InputGroup>
                <Input type='text' id='artist' borderColor={artistUpdated ? 'orange' : 'inherit'} disabled={confirmDelete} defaultValue={albumDetails?.artist} onChange={handleChange} />
                {artistUpdated && <InputRightElement><WarningIcon color='orange' /></InputRightElement>}
              </InputGroup>
            </FormControl>
            <FormControl display='flex' alignItems='end' mt='10px'>
              <FormLabel w='105px'>Title</FormLabel>
              <InputGroup>
                <Input type='text' id='title' borderColor={titleUpdated ? 'orange' : 'inherit'} disabled={confirmDelete} defaultValue={albumDetails?.title} onChange={handleChange} />
                {titleUpdated && <InputRightElement><WarningIcon color='orange' /></InputRightElement>}
              </InputGroup>
           </FormControl>
            <FormControl display='flex' alignItems='end' mt='10px'>
              <FormLabel w='105px'>Image URL</FormLabel>
              <InputGroup>
                <Input type='text' id='image' borderColor={imageUpdated ? 'orange' : 'inherit'} disabled={confirmDelete} defaultValue={albumDetails?.image} onChange={handleChange} />
                {imageUpdated && <InputRightElement><WarningIcon color='orange' /></InputRightElement>}
              </InputGroup>
            </FormControl>
            {/* <Input type='submit' display='none' /> */}
          </form>
        </ModalBody>
        <ModalFooter>
          {!confirmDelete ? (
            <>
              <Button key='delAlbum' variant='ghost' ml='-15px' onClick={() => setConfirmDelete(true)}>Delete Album?</Button>
              <Spacer />
              {/* TODO: on save give user feedback we're working */}
              {someUpdate && <Button key='save' id='save-button' aria-label='Save form' colorScheme='green' mr='5px' onClick={handleSave}>Save</Button>}
              <Button key='close' colorScheme='blue' variant={someUpdate ? 'outline' : 'solid'} onClick={handleClose}>
                Cancel
              </Button>
            </>
          ): (
            <>
              <Text>Are you sure you want to delete this?</Text>
              <Button key='cancelDel' onClick={() => setConfirmDelete(false)}>Nope!</Button>
              {/* TODO: on delete give user feedback we're working */}
              <Button key='confirmDel' colorScheme='red' mr='5px' onClick={handleDelete}>Delete</Button>
            </>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default EditModal
