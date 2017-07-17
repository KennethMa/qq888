const express = require('express')
const expressGraphQL = require('express-graphql')
const next = require('next')

const schema = require('./data/schema')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.use('/graphql', expressGraphQL(req => ({
    schema,
    graphiql: dev,
    rootValue: { request: req },
    pretty: dev,
  })));

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
