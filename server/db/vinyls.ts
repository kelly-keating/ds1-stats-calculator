import { Vinyl } from '../../models'

import db from './connection'

export function getVinyls(): Promise<Vinyl[]> {
  return db('vinyls')
    .select()
}

export function getVinylById(id: number): Promise<Vinyl> {
  return db('vinyls')
    .where('id', id)
    .first()
}

export function addVinyl(newVinyl: Vinyl): Promise<Vinyl> {
  return db('vinyls')
    .insert(newVinyl)
    .returning('*')
    .then(([dbVinyl]) => dbVinyl)
}

export function updateVinyl(id: number, image: string): Promise<Vinyl> {
  return db('vinyls')
    .where('id', id)
    .update({ image })
    .returning('*')
    .then(([dbVinyl]) => dbVinyl)
}

export function deleteVinyl(id: number): Promise<void> {
  return db('vinyls')
    .where('id', id)
    .del()
}
