import Select from './Select'
import Button from './Button'

export default ({ onBuyIt }) => (
  <div className="form_field clear-fix p-t-20 form--inline">
    <fieldset className="form_control form_control--select">
      <Select defaultValue="10" />
    </fieldset>
    <fieldset className="form_control form_control--button">
      <Button type="button" primary onClick={onBuyIt}>立即投注</Button>
    </fieldset>
    <style jsx>{`
      .form_control--select {
        margin-right: 0.3125rem;
      }

      .form_control--button {
        -webkit-box-flex: 1;
            -ms-flex-positive: 1;
                flex-grow: 1;
      }
    `}</style>
  </div>
)
