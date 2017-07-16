import withData from '../lib/withData'
import App from '../components/App'
import Intro from '../components/Intro'
import PrizeList from '../components/PrizeList'

export default withData((props) => (
  <App>
    <PrizeList />
    <Intro />
  </App>
))
