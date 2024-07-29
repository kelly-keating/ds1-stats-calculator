import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import { useState } from 'react'

import EditModal from "./EditModal"
import NewVinyl from './NewVinyl'
import Vinyls from './Vinyls'
import LoginButton from './Login'
import LogoutButton from './Logout'
import Profile from './Profile'

function Dash() {
  const [showAdd, setShowAdd] = useState(false)
  const toggleShowAdd = () => setShowAdd(show => !show)

  return (
    <>
      <Flex as="header" align="center" justify="space-between"
        position="fixed" top="0" left="0" w="100vw" padding="20px"
      >
        <Heading>Vinyls {import.meta.env.VITE_GREET}</Heading>
        {!showAdd && <Button onClick={toggleShowAdd}>Add New Album</Button>}
      </Flex>

      <Box mt='50px'>
        <LoginButton />
        <LogoutButton />
        <Profile />
      </Box>

      <EditModal />

      <Box mt="60px">
        {showAdd && <NewVinyl close={toggleShowAdd} />}
        <Vinyls />
      </Box>
    </>
  )
}

export default Dash
