import {
  Card,
  CardBody,
  Flex,
  Heading,
  IconButton,
  Image,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { useDispatch } from 'react-redux'

import { openModal } from '../store/modalSlice'

interface Props {
  id: number
  artist: string
  title: string
  image: string
}

function SingleVinyl(album: Props) {
  const { artist, title, image} = album
  const dispatch = useDispatch()

  return (
    <Card maxW='sm'>
      <CardBody>
        <Image src={image} alt={title + " cover"} borderRadius='lg' />
        <Flex alignItems='end'>
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{title}</Heading>
            <Text>{artist}</Text>
          </Stack>
          <Spacer />
          <IconButton
            aria-label={"Edit " + title}
            icon={<EditIcon />}
            onClick={() => dispatch(openModal(album))}
          />
        </Flex>
      </CardBody>
    </Card>
  )
}

export default SingleVinyl
