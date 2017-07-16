import React from 'react'
import styled from 'styled-components'

export default styled.button`
  -moz-appearance: none;
  -webkit-appearance: none;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 0.125rem;
  -webkit-box-shadow: none;
  box-shadow: none;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-size: inherit;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
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
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
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
