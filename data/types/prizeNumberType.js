const graphql = require('graphql')
const {
  GraphQLInt: IntType,
  GraphQLObjectType: ObjectType,
  GraphQLList: List
} = graphql

const PrizeNumberType = new ObjectType({
  name: 'PrizeNumberType',
  description: '具体菠菜类型和值',
  fields: {
    type: { type: IntType },
    numbers: { type: new List(IntType) }
  }
});

module.exports = PrizeNumberType;
