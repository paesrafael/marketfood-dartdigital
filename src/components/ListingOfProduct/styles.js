import styled, { css } from 'styled-components'

const keyframes = css`
  @keyframes showProductItem {
    from {
      opacity: 0;
      -webkit-transform: translateY(-50px);
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes showCartContent {
    from {
      opacity: 0;
      -webkit-transform: translateX(-100px);
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
`

const Card = css`
  padding: 10px;
  margin: 0 10px 20px 10px;
  border: 1px solid var(--secondary);
  border-radius: 10px;
  display: inline-block;
  vertical-align: middle;
`

const Container = styled.section`
  margin: 0 auto;
  width: 80%;

  @media (min-width: 1301px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Content = styled.div`
  width: 100%;
  ${keyframes};
  display: inline-block;

  .icon-check {
    margin-top: 10px;
  }

  @media (max-width: 1130px) {
    margin-bottom: 20px;
    display: flex;
    justify-content: left;
    overflow-y: auto;
  }
`

const ProductItem = styled.button`
  ${Card}
  animation: showProductItem 1300ms;
  cursor: pointer;

  &:hover {
    background-color: var(--primary);

    .text {
      color: var(--white);
    }

    .icon-check {
      color: var(--white) !important;
    }
  }

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-check {
    margin-left: 5px;
  }
`

const Text = styled.p`
  margin: ${(props) => (props.margin ? props.margin : '0')};
  color: ${(props) => (props.color ? props.color : `var(--text)`)};
  font-size: ${(props) => (props.size ? props.size : '16px')};
`

const Title = styled.h2`
  margin: ${(props) => (props.margin ? props.margin : '0 0 20px 0')};
  font-size: 20px;

  &.red {
    color: var(--red);
  }
`

const SubTitle = styled.h3``

const ButtonWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  padding: 10px;
  border: 1px solid var(--secondary);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    border-color: var(--primary);
    background-color: var(--primary);

    .text-button {
      color: var(--white);
    }
  }
`

const CartContainer = styled.div`
  display: block;
`

const CartContent = styled.div`
  animation: showCartContent 1300ms;
`

const CartItem = styled.div`
  ${Card}

  @media (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 30px;
    width: 85%;
  }
`

const CartHeader = styled.div``

const CartInput = styled.input`
  padding: 5px;
  margin-top: 10px;
  text-align: center;
  border: 1px solid var(--secondary);
  border-radius: 10px;
`

const CartFooter = styled.footer`
  padding-top: 10px;
  margin-top: 10px;
  border-top: 1px solid var(--secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon {
    cursor: pointer;

    &:hover {
      color: var(--secondary) !important;
    }
  }

  .icon-filled {
    cursor: pointer;

    &:hover {
      fill: var(--primary) !important;
    }
  }
`

const AddedCartContainer = styled.div``

const AddedCartItem = styled.div`
  ${Card}

  @media (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 30px;
    width: 85%;
  }
`

const Qty = styled.span``

export {
  Container, Content,
  ProductItem, Text, Title, SubTitle,
  ButtonWrapper, Button,
  CartContainer, CartContent, CartItem,
  CartHeader, CartInput, CartFooter,
  AddedCartContainer, AddedCartItem, Qty,
}
