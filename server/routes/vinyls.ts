import { Response, Router } from 'express'
import { Vinyl } from '../../models'

import * as db from '../db/vinyls'

const router = Router()

// Helper function to send errors
function sendError(res: Response, err: Error) {
  console.log(err)
  res.status(500).json({ message: 'Something went wrong' })
}

// GET /vinyls
router.get('/', (req, res) => {
  db.getVinyls()
    .then((vinyls) => res.json(vinyls))
    .catch((err) => sendError(res, err))
})

// GET /vinyls/:id
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getVinylById(id)
    .then((vinyl) => res.json(vinyl))
    .catch((err) => sendError(res, err))
})

// POST /vinyls
router.post('/', (req, res) => {
  const vinyl = req.body
  db.addVinyl(vinyl)
    .then((vinyl) => res.json(vinyl))
    .catch((err) => sendError(res, err))
})

// PUT /vinyls/:id
router.put('/:id', (req, res) => {
  const id = Number(req.params.id)
  const { artist, title, image } = req.body

  const newDetails: Partial<Vinyl> = {}
  if (artist) newDetails.artist = artist
  if (title) newDetails.title = title
  if (image) newDetails.image = image

  if (!newDetails.artist && !newDetails.title && !newDetails?.image) {
    sendError(res, Error('No details to update provided'))
  } else {
    db.updateVinyl(id, { artist, title, image })
      .then((vinyl) => res.json(vinyl))
      .catch((err) => sendError(res, err))
  }
})

// DELETE /vinyls/:id
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteVinyl(id)
    .then(() => res.json({ message: 'Fruit deleted' }))
    .catch((err) => sendError(res, err))
})

export default router
