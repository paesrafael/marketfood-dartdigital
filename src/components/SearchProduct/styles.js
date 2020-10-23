import styled, { css } from 'styled-components'

const keyframes = css`
  @keyframes iconSearch {
    from {
      opacity: 0;
      -webkit-transform: translateX(10px);
      transform: translateX(10px);
    }
    to {
      opacity: 1;
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
`

const Container = styled.div`
  margin: 10px auto 20px;
  width: 100%;
  max-width: 90%;
  text-align: left;
  display: block;
`

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  ${keyframes}

  .icon-absolute {
    position: absolute;
    top: 10px;
    left: 15px;
  }

  .icon-close {
    position: absolute;
    top: 15px;
    right: 20px;
    display: none;
    animation: iconSearch 800ms;
    cursor: pointer;

    &.active {
      color: var(--red);
      display: block;
    }
  }
`

const Input = styled.input`
  padding: 15px;
  padding-left: 45px;
  width: 97%;
  border: 1px solid var(--secondary);
  border-right: 0;
  border-radius: 5px 0 0 5px;

  &:focus {
    border-color: var(--secondary);
  }

  @media (max-width: 1300px) {
    width: 90%;
  }
`

const Button = styled.button`
  padding: 9px;
  border: 1px solid var(--secondary);
  border-radius: 0 5px 5px 0;
  background: var(--secondary);
  cursor: pointer;
  z-index: 1;
`

const Text = styled.p`
  margin: ${(props) => (props.margin ? props.margin : '0')};
  color: ${(props) => (props.color ? props.color : 'var(--white)')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '18px')};
`

export {
  Container,
  Form,
  InputWrapper,
  Input,
  Button,
  Text
}
