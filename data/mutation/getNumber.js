const graphql = require('graphql')
const PrizeNumberType = require('../types/prizeNumberType')
const randomIntFromInterval = require('../../lib/util').randomIntFromInterval

const getPrizeNumbersMutate = {
  type: PrizeNumberType,
  args: {
    type: {
      description: '菠菜类型',
      type: graphql.GraphQLInt,
    },
  },
  resolve(_, { type = 1 }) {
    try {
      let data
      switch (type) {
        default:
          data = {
            type: 1,
            numbers: new Array(6).fill(1).map(i => i = randomIntFromInterval(1, 33))
          }
      }
      return data;
    } catch (e) {
      throw e;
    }
  },
};

module.exports = getPrizeNumbersMutate;
