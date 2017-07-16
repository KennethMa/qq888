export default ({ data }) => {
  const newData = data > 9999 ? Math.floor(data / 10000) : data
  const arr = newData.toString().split('')
  // 万级数字均不为0
  const isShow10K = index => !(arr.slice(-4).every(item => item === '0') && (arr.length - index) < 5)
  return (
    <p className="prize_pool">
      <i className="icon iconfont icon-rmb"></i>奖池
      {arr.map((item, index) => (
        isShow10K(index) && <span key={index}>
          <span className="prize_pool--number">{item}</span>
          {arr.length > 4 && index === (arr.length - 5) && '亿'}
          {isShow10K(index) && data > 9999 && index === (arr.length - 1) && '万'}
        </span>
      ))}

      <style jsx>{`
        .prize_pool {
          margin-top: 0.75rem;
          text-align: center;
          color: #979696;
          line-height: 1.3;
        }

        .prize_pool--number {
          display: inline-block;
          background-color: #f2514a;
          color: #fff;
          border-radius: 0.078rem;
          width: 0.3434rem;
          margin-left: 0.031rem;
          margin-right: 0.031rem;
        }
      `}</style>
    </p>
  )
}
