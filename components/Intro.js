import styled from 'styled-components'

const Title = styled.h2`
  font-size: 15px;
  color: #8e2424;
  text-align: center;
  line-height: 1;
  position: relative;
  &::before, &::after {
    position: absolute;
    content: " ";
    width: 2.766rem;
    height: 1px;
    background-color: #8E2424;
    top: calc(0.5em - 1px);
  }
  &::before {
    left: 0.219rem;
  }
  &::after {
    right: 0.266rem;
  }

`

export default () => (
  <div className="intro">
    <Title className="intro-title">规则说明</Title>
    <p className="intro-desc">规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明</p>
    <style jsx global>{`
      [data-dpr="2"] .intro-title {
        font-size: 30px;
      }
      [data-dpr="3"] .intro-title {
        font-size: 45px;
      }
    `}</style>
    <style jsx>{`
      .intro {
        margin-top: 0.625rem;
        padding-left: 0.703rem;
        padding-right: 0.625rem;
      }
      .intro-desc {
        padding-top: 0.75em;
        line-height: 1.5;
        color: #8e2424;
      }
    `}</style>
  </div>
)
