import Button from './Button'

export default ({ data, onRefresh }) => (
  <div>
    {data.type === 1 &&
      <div>
        <p className="item_name"><span className="item_name_span" />&nbsp;复式投注幸运号码：</p>
        <ul className="item_numlist">
          {data.numbers.map((item, index) => (
            <li key={index}
              className={`item_numlist-item col bg-primary${index === (data.numbers.length - 1) ? '-transparent' : ''}`}>
              {item < 10 ? `0${item}` : item}
            </li>
          ))}
          <li className="item_numlist-item col">
            <Button type="button" refresh fetching={false} onClick={onRefresh}><i className="icon iconfont icon-refresh"></i></Button>
          </li>
        </ul>
      </div>
    }
    <style jsx>{`
      .item_name {
        color: #979696;
        display: table;
        line-height: 1;
      }

      .item_name_span {
        display: table-cell;
        background: no-repeat center center url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAaCAMAAABvn+dxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAATlBMVEUAAADyUUryUUryUUryUUryUUryUUryUUryUUryUUryUUryUUryUUryUUryUUryUUryUUryUUryUUr+8/P4op7////83Nv1f3r7xcMAAACr2UaeAAAAEnRSTlMA6XseeuJuCuHZYQbOVgLDSQEoqZsBAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAINJREFUKM+tkVsOhCAQBEfXx/pEbQa4/0l3jIJiiMlG64OPSqfTE2hJQa9ZaHk0TpYjcJtd0XztjRvMkbWc2gCbsAahB8E6hi9i662Dwz7EhAZZKTZxhc/GV/xrjXS6J3+R5Z8iu9iyqomorr4n27QdbXRts9t+GOlgHHqxapopZp7UD79QJBH/LVeIAAAAAElFTkSuQmCC');
        background-size: cover;
        width: 11px;
        height: 13px;
        position: relative;
        top: -1px;
      }

      .item_numlist {
        padding-top: 0.3125rem;
      }

      .item_numlist-item {
        width: 0.7813rem;
        height: 0.7813rem;
        border-radius: 50%;
        line-height: 0.7813rem;
        font-size: 15px;
        color: #fff;
      }

      .item_numlist-item:not(:first-child) {
        margin-left: 0.3125rem;
      }
    `}</style>
    <style jsx global>{`
      [data-dpr="2"] .item_name_span {
        width: 21px;
        height: 26px;
      }
      [data-dpr="3"] .item_name_span {
        width: 33px;
        height: 39px;
      }
      [data-dpr="2"] .item_numlist-item {
        font-size: 30px;
      }
      [data-dpr="3"] .item_numlist-item {
        font-size: 45px;
      }
    `}</style>
  </div>
)
