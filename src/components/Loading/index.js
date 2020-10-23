import React from 'react'

import loaderImage from '~/assets/icons/loader.svg'

import {
  Container,
  Image,
} from './styles'

export default function Loading({ width, height }) {
  return (
    <Container>
      <Image
        src={loaderImage}
        width={width}
        heigth={height}
      />
    </Container>
  )
}
