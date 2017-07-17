import React from 'react'
import styled from 'styled-components'

export default styled.button`
  text-align: center;
  -moz-appearance: none;
  -webkit-appearance: none;
  border-radius: 0.125rem;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: inherit;
  line-height: 1.5;
  padding-bottom: calc(0.375em - 1px);
  padding-left: calc(0.625em - 1px);
  padding-right: calc(0.625em - 1px);
  padding-top: calc(0.375em - 1px);
  position: relative;
  vertical-align: top;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;
  width: ${props => props.refresh || props.primary ? '100%' : 'auto'};
  height: ${props => props.refresh ? '100%' : '0.875rem'};
  color: ${props => props.refresh ? '#8f8f8f' : props.primary ? '#fff' : '#363636'};
  border: ${props => props.refresh ? 'none': `1px solid ${props.primary ? '#f2514a' : '#dbdbdb'}`};
  background-color: ${props => props.refresh ? 'transparent' : props.primary ? '#f2514a' : 'white'};
  animation: ${props => props.fetching ? 'spin infinite 2s linear' : 'none'};
  .icon {
    line-height: 1;
  }
`
