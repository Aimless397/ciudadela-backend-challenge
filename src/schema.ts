import { buildSchema } from 'graphql'

export const schema = buildSchema(`
  type Info {
    count: Int
    pages: Int
    next: String
    prev: String
  }

  type Origin {
    name: String
    url: String
  }

  type Location {
    name: String
    url: String
  }

  type Character {
    id: Int
    name: String
    status: String
    species: String
    type: String
    gender: String
    origin: Origin
    location: Location
    image: String
    episode: [String]
    url: String
    created: String
  }

  type Response {
    info: Info
    results: [Character]
  }
  
  type Query {
    fetchCharacters(page: Int): Response
  }
`)
