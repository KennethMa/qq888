const uuidv1 = require('uuid/v1')
const graphql = require('graphql')
// const PrizeType = require('../types/PrizeType')
const randomIntFromInterval = require('../../lib/util').randomIntFromInterval
const PrizeNumberType = require('../types/prizeNumberType')
const {
  GraphQLID: ID,
  GraphQLInt: IntType,
  GraphQLString: StringType,
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

const prize = {
  type: PrizeType,
  resolve() {
    try {
      const data = {
        id: uuidv1(),
        displayId: randomIntFromInterval(1000, 9999),
        endTime: `${Date.now() + (randomIntFromInterval(60, 7 * 24 * 60 * 60)) * 1000}`,
        prizeNumber: {
          type: 1,
          numbers: new Array(6).fill(1).map(i => i = randomIntFromInterval(1, 33))
        },
        prizePool: randomIntFromInterval(1000, 1234567890)
      }
      return data;
    } catch (e) {
      throw e;
    }
  },
};

module.exports = prize
