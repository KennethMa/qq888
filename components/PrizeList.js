
import { gql, graphql, compose } from 'react-apollo'
import PrizeNumber from './PrizeNumber'
import PrizeHeader from './PrizeHeader'
import PrizeForm from './PrizeForm'
import PrizePool from './PrizePool'
import PrizeListQuery from './PrizeList.gql'
import GetNumberMutation from './PrizeNumberGet.gql'

function PrizeList ({ data: { loading, error, prize }, onRefresh}) {
  if (error) return <div>抱歉！{error}</div>
  const handleBuyIt = () => window.alert('投注成功！')
  const handleRefresh = () => onRefresh(prize.prizeNumber.type)
  return (
    <ul className="prize_list">
      <li className="item">
        <PrizeHeader displayId={prize.displayId} endTime={prize.endTime}/>
        <div className="item_content">
          <PrizeNumber data={prize.prizeNumber} onRefresh={handleRefresh}/>
          <PrizeForm onBuyIt={handleBuyIt}/>
          <PrizePool data={prize.prizePool}/>
        </div>
      </li>
      <style jsx>{`
        .prize_list {
          margin: 0 0.3125rem;
        }
        .item {
          background-color: #fff;
          border-radius: 0.3125rem;
          padding: 0.4219rem 0.3125rem 0.3125rem;
        }
        .item_content {
          padding-top: 0.2656rem;
        }
      `}</style>
    </ul>
  )
}

export default compose(
  graphql(PrizeListQuery),
  graphql(GetNumberMutation, {
    props: ({ ownProps, mutate }) => ({
      onRefresh: type => mutate({ variables: { type } }),
    }),
    options: (props) => ({
      update: (proxy, { data: { getPrizeNumbersMutate } }) => {
        const data = proxy.readQuery({ query: PrizeListQuery })
        data.prize.prizeNumber = getPrizeNumbersMutate
        proxy.writeQuery({ query: PrizeListQuery, data })
      },
    }),
  }),
)(PrizeList)
