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
  Text,
  Image,
  Footer,
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

      <Footer>
        <Text>
          © Copyright 2020 -
          <a
            href="https://github.com/paesrafael/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rafael Paes
          </a>
        </Text>
      </Footer>
    </Container>
  )
}
