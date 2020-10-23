import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'

import { SearchProvider } from '~/contexts'

import AddProduct from '~/components/AddProduct'
import ListingOfProduct from '~/components/ListingOfProduct'

import {
  Container,
  Wrapper,
  MarketFood,
  Title,
} from './styles'

export default function ProductList() {
  return (
    <Container>
      <Wrapper>
        <MarketFood>
          <FaRegFileAlt size="32" color={`var(--red)`} />
          MarketFood
        </MarketFood>

        <Title>Faça sua lista do mercado</Title>

        <SearchProvider>
          <AddProduct />

          <ListingOfProduct />
        </SearchProvider>
      </Wrapper>
    </Container>
  )
}
