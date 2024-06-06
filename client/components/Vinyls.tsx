import { useGetVinylsQuery } from "../api/vinyls"

function Vinyls() {
  const { data: vinyls = [], error, isLoading } = useGetVinylsQuery()

  return (
    <>
      <h2>Vinyls</h2>
      <ul>
        {vinyls.map((album) => (
          <li key={album.id}>{album.title} by {album.artist}</li>
        ))}
      </ul>
    </>
  )
}

export default Vinyls
