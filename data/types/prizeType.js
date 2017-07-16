const graphql = require('graphql')
const PrizeNumberType = require('./prizeNumberType')
const {
  GraphQLID: ID,
  GraphQLInt: IntType,
  GraphQLString: StringType
  GraphQLObjectType: ObjectType,
} = graphql

const PrizeType = new ObjectType({
  name: 'Prize',
  description: '菠菜查询',
  fields: {
    id: { type: ID },
    displayId: { type: IntType },
    endTime: { type: StringType },
    prizePool: { type: IntType },
    prizeNumber: { type: PrizeNumberType },
  },
});

module.exports = PrizeType;
