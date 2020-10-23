import React, { useState } from 'react'
import {
  FaCheckCircle, FaTrashAlt,
  FaPlusCircle, FaStream,
} from 'react-icons/fa'
import { FiCornerDownRight } from 'react-icons/fi'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import { useSearchProduct } from '~/contexts'

import SearchProduct from '~/components/SearchProduct'
import CategoryProduct from '~/components/CategoryProduct'

import {
  Container,
  Content,
  ProductItem,
  Text,
  Title,
  SubTitle,
  ButtonWrapper,
  Button,
  CartContainer,
  CartContent,
  CartItem,
  CartHeader,
  CartInput,
  CartFooter,
  AddedCartContainer,
  AddedCartItem,
  Qty,
} from './styles'

export default function ListingOfProduct() {
  const [addedCart, setAddedCart] = useState([])
  const [tabSelected, setTabSelected] = useState(0)
  const {
    cart, setCart,
    searchProduct, searchProductName,
    productQuantities, setProductQuantities,
    addedCartProductQuantities, setAddedCartProductQuantities,
  } = useSearchProduct()

  function handleAddCart(addProduct) {
    setCart([...cart, addProduct])

    if (tabSelected !== 0) {
      setTabSelected(0)
    }
  }

  function handleRemoveCart(removeProductID) {
    setCart(cart.filter(cartItems => cartItems.id !== removeProductID))
  }

  function handleAddedToCart(addedProduct, productItemQuantities) {
    setAddedCart([...addedCart, addedProduct])
    setAddedCartProductQuantities([...addedCartProductQuantities, { qtyID: addedProduct.id, qty: productItemQuantities[0].qty }])
    setCart(cart.filter(removeCartItem => removeCartItem.id !== addedProduct.id))
  }

  const handleQtyChange = (cartProduct, productItemQuantity) => {
    const qtyChange = [...productQuantities]
    qtyChange[cartProduct] = productItemQuantity
    setProductQuantities([{ qty: productItemQuantity }])
  }

  return (
    <Container>
      <SearchProduct />

      <Content>
        {searchProduct(searchProductName) &&
          (searchProduct(searchProductName).length > 0 ? (
            searchProduct(searchProductName).slice(0, 20).map(product => (
              <ProductItem
                key={product.id}
                type="button"
                onClick={() => handleAddCart(product)}
              >
                <Text className="text">
                  {product.description}
                </Text>

                <FaCheckCircle
                  size="18"
                  color={`var(--secondary)`}
                  className="icon-check"
                />
              </ProductItem>
            ))
          ) : (
            <Text>loading ...</Text>
          ))
        }
      </Content>

      <Tabs
        selectedIndex={tabSelected}
        onSelect={tabSelect => setTabSelected(tabSelect)}
      >
        <TabList>
          <Tab>Minha lista de compras</Tab>
          <Tab>Meu carrinho</Tab>
        </TabList>

        <TabPanel>
          <CartContainer>
            {!!cart.length >= 1 ? (
              <CartContent>
                <Title margin="0 0 10px 0">Sua lista de compras para hoje</Title>

                <ButtonWrapper>
                  <Button onClick={() => setCart('')}>
                    <FaStream
                      size="18"
                      color={`var(--secondary)`}
                      className="icon-filled"
                    />

                    <Text margin="0 0 0 10px" className="text-button">Limpar lista</Text>
                  </Button>
                </ButtonWrapper>

                {cart.map(cartItem => (
                  <CartItem key={cartItem.id}>
                    <CartHeader>
                      <Text className="text">{cartItem.description}</Text>

                      <CartInput
                        type="number"
                        name={`product-${cartItem.id}`}
                        placeholder="Quantidade"
                        min="1"
                        onChange={(qty) => (handleQtyChange(`product-${cartItem.id}`, qty.target.value))}
                      />
                    </CartHeader>

                    <CartFooter>
                      <FaTrashAlt
                        size="18"
                        color={`var(--red)`}
                        className="icon"
                        onClick={() => handleRemoveCart(cartItem.id)}
                      />

                      <FaPlusCircle
                        size="18"
                        color={`var(--secondary)`}
                        className="icon-filled"
                        onClick={() => handleAddedToCart(cartItem, productQuantities)}
                      />
                    </CartFooter>
                  </CartItem>
                ))}
              </CartContent>
            ) : (
              <Text>Nenhum produto na sua lista de compras!</Text>
            )}
          </CartContainer>
        </TabPanel>

        <TabPanel>
          {!!addedCart.length >= 1 ? (
            <AddedCartContainer>
              <Title className="red">Produtos em seu carrinho</Title>

              {addedCart.map(addedCart => (
                <AddedCartItem key={`addedProduct-${addedCart.id}`}>
                  <SubTitle>
                    {addedCart.description}
                  </SubTitle>

                  {addedCartProductQuantities.length >= 1 && (
                    addedCartProductQuantities.filter((searchQty) => searchQty.qtyID === addedCart.id).map(quantity => (
                      <Qty key={`qty-${quantity.id}`}>
                        <FiCornerDownRight
                          size="18"
                          color={`var(--secondary)`}
                        />
                        Qtd: {quantity.qty}
                      </Qty>
                    ))
                  )}

                  <CategoryProduct categoryID={addedCart.category_id} />
                </AddedCartItem>
              ))}
            </AddedCartContainer>
          ) : (
            <Text>Você ainda não pegou nenhum produto no mercado!</Text>
          )}
        </TabPanel>
      </Tabs>
    </Container>
  )
}
