import { Flex } from "@chakra-ui/react"
import { useGetVinylsQuery } from "../api/vinyls"

import SingleVinyl from "./SingleVinyl"

function Vinyls() {
  const { data: vinyls = [], error, isLoading } = useGetVinylsQuery()

  return (
    <Flex wrap='wrap' justify='center'>
      {vinyls.map((album) => <SingleVinyl key={album.id} {...album} />)}
    </Flex>
  )
}

export default Vinyls
