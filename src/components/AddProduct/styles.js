import styled from 'styled-components'

const Container = styled.section`
  margin-top: 10px;
  width: 100%;

  .icon {
    cursor: pointer;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid var(--secondary);
  border-radius: 5px;
  display: block;

  &:focus {
    border-color: var(--secondary);
  }
`

const Button = styled.button`
  padding: 10px;
  width: 100%;
  border: 1px solid var(--secondary);
  border-radius: 0 5px 5px 0;
  background: var(--secondary);
  display: block;
  cursor: pointer;
`

const Text = styled.p`
  margin: ${(props) => (props.margin ? props.margin : '0')};
  color: ${(props) => (props.color ? props.color : 'var(--white)')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '18px')};
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    margin-right: 10px;
  }
`

export {
  Container,
  Form,
  Input,
  Button,
  Text
}

