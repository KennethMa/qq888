const express = require('express')
const expressGraphQL = require('express-graphql')
const next = require('next')

const schema = require('./data/schema')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const app = express()

  app.use('/graphql', expressGraphQL(req => ({
    schema,
    graphiql: dev,
    rootValue: { request: req },
    pretty: dev,
  })));

  app.get('*', (req, res) => {
    return handle(req, res)
  })

  app.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
