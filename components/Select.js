import React from 'react'
import styled from 'styled-components'

export const StyledSelect = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 0.125rem;
  -webkit-box-shadow: none;
  box-shadow: none;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-size: inherit;
  height: 0.8281rem;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.625em - 1px);
  padding-left: calc(0.9167em - 2px);
  padding-right: calc(1.875em - 1px);
  padding-top: calc(0.375em - 1px);
  position: relative;
  vertical-align: top;
  background-color: transparent;
  border-color: rgba(151, 150, 150, 0.502);
  color: #979696;
  cursor: pointer;
  display: block;
  max-width: 100%;
  outline: none;
`

export default (props) => (
  <span className='select'>
    <StyledSelect defaultValue='10' {...props}>
      <option value='10'>10元</option>
      <option value='100'>100元</option>
      <option value='1000'>1000元</option>
    </StyledSelect>
    <style jsx>{`
      .select {
        display: inline-block;
        height: 0.8281rem;
        max-width: 100%;
        position: relative;
        vertical-align: top;
      }

      .select:after {
        border: 2px solid #979696;
        border-right: 0;
        border-top: 0;
        content: " ";
        display: block;
        height: 0.5em;
        pointer-events: none;
        position: absolute;
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
        width: 0.5em;
        margin-top: -0.3em;
        right: 1.042em;
        top: 50%;
        z-index: 4;
      }
    `}</style>
  </span>
)
