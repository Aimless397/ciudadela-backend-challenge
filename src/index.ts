import express from 'express'
import cors from 'cors'

import { graphqlHTTP } from 'express-graphql'
import { schema } from './schema'
import { resolvers } from './resolvers'

const app = express()
app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
)

app.listen(4000, () => {
  console.log('Servidor GraphQL corriendo en http://localhost:4000/graphql')
})
