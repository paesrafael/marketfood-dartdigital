import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'

import { SearchProvider } from '~/contexts'

import AddProduct from '~/components/AddProduct'
import ListingOfProduct from '~/components/ListingOfProduct'

import WomanManMarket from '~/assets/images/woman-man-supermarket.png'

import {
  Container,
  Wrapper,
  MarketFood,
  Title,
  Image,
} from './styles'

export default function ProductList() {
  return (
    <Container>
      <Wrapper>
        <MarketFood>
          <FaRegFileAlt size="32" color={`var(--red)`} />
          MarketFood
        </MarketFood>

        <Title>Faça sua lista de mercado</Title>

        <Image src={WomanManMarket} alt="Mulher e Homem no mercado" />

        <SearchProvider>
          <AddProduct />

          <ListingOfProduct />
        </SearchProvider>
      </Wrapper>
    </Container>
  )
}
