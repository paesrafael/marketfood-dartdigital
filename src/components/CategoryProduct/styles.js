import styled from 'styled-components'

const Container = styled.div``

const Text = styled.p`
  margin: ${(props) => (props.margin ? props.margin : '0')};
  color: var(--text);
  font-size: ${(props) => (props.size ? props.size : '16px')};
`

const AddedCartCategory = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export {
  Container, Text, AddedCartCategory,
}
