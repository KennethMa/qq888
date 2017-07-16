const graphql = require('graphql')
const prize = require('./queries/prize')
const getPrizeNumbersMutate = require('./mutation/getNumber')
const { GraphQLSchema: Schema, GraphQLObjectType: ObjectType } = graphql

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      prize,
    },
  }),
  mutation: new ObjectType({
    name: 'Mutation',
    fields: {
      getPrizeNumbersMutate
    },
  }),
});

module.exports = schema
