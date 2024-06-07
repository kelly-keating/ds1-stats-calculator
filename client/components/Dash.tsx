import { Box, Flex, Heading, Link } from '@chakra-ui/react'
import { Link as RouterLink, Outlet } from 'react-router-dom'

import Vinyls from './Vinyls'
import EditModal from "./EditModal"

function Dash() {
  return (
    <>
    
      <Flex as="header" align="center" justify="space-between"
        position="fixed" top="0" left="0" w="100vw" padding="20px"
      >
        <Heading>Vinyls</Heading>
        <nav>
          <Link as={RouterLink} to="/">Home</Link>
          {' | '}
          <Link as={RouterLink} to="/add">Add a new album</Link>
        </nav>
      </Flex>

      <Box mt="60px">
        <Outlet />
        <EditModal />
        <Vinyls />
      </Box>
    </>
  )
}

export default Dash
