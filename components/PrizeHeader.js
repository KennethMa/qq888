export default ({displayId, endTime}) => {
  const week = ['周天', '周一', '周二', '周三', '周四', '周五', '周六']
  const date = new Date(+endTime)
  const h = date.getHours()
  const m = date.getMinutes()
  const endTimeStr = `${week[date.getDay()]}${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}`
  return (
    <div className="item_header">
      <h2><i className="icon iconfont icon-time"></i>第{displayId}期&nbsp;{endTimeStr}开奖</h2>
      <style jsx>{`
        .item_header {
          color: #666;
          padding-bottom: 0.2344rem;
          border-bottom: 1px solid rgba(151, 150, 150, 0.502);
        }
      `}</style>
    </div>
  )
}
