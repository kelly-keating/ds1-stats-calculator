import { ChangeEvent, FormEvent, useState } from "react"
import { useCreateVinylMutation } from "../api/vinyls"

function NewVinyl() {
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

  return (
    <form onSubmit={handleSubmit}>
      <h3>New Album</h3>
      <div>
        <label htmlFor='artist'>Artist:</label>{' '}
        <input type='text' id='artist' onChange={handleUpdate} value={newAlbumData.artist} />
      </div>

      <div>
        <label htmlFor='title'>Title:</label>{' '}
        <input type='text' id='title' onChange={handleUpdate} value={newAlbumData.title} />
      </div>

      <div>
        <label htmlFor='image'>Image URL:</label>{' '}
        <input type='text' id='image' onChange={handleUpdate} value={newAlbumData.image} />
      </div>

      <div>
        <input type='submit' value='Add New Album' disabled={isLoading} />
      </div>
    </form>
  )
}

export default NewVinyl
