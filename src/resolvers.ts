import axios from 'axios'
import { Pagination } from './interfaces/interfaces'

export const resolvers = {
  fetchCharacters: async ({ page }: Pagination) => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${page}`
      )
      return {
        info: response.data.info,
        results: response.data.results,
      }
    } catch (error) {
      throw new Error('Hubo un error al obtener la lista de personajes')
    }
  },
}
