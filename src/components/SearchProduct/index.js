import React, { useState } from 'react'
import { FaSearch, FaTimesCircle, FaArrowCircleRight } from 'react-icons/fa'

import { useSearchProduct } from '~/contexts'

import {
  Container,
  Form,
  InputWrapper,
  Input,
  Button,
  Text,
} from './styles'

export default function SearchProduct() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const { setSearchProductName } = useSearchProduct()

  function handleSubmitForm(event) {
    event.preventDefault()

    if (!search) {
      setError('O campo não pode ser vazio.')

      setTimeout(() => {
        setError('')
      }, 2500)
    }

    setSearchProductName(search)
  }

  function handleSearchProductClear() {
    setSearch('')
    setSearchProductName('')
  }

  return (
    <Container>
      <Form onSubmit={handleSubmitForm}>
        <InputWrapper>
          <FaSearch
            size="25"
            color={`var(--red)`}
            className="icon-absolute"
          />

          <Input
            type="text"
            value={search}
            placeholder="Buscar um produto"
            onChange={(item) => setSearch(item.target.value)}
          />

          <FaTimesCircle
            className={`icon-close ${search ? 'active' : ''}`}
            onClick={handleSearchProductClear}
          />
        </InputWrapper>

        <Button type="submit">
          <FaArrowCircleRight
            size="25"
            color={`var(--white)`}
          />
        </Button>
      </Form>

      {!!error && (
        <Text
          margin="10px 0"
          color={`var(--secondary)`}
          fontSize="15px"
        >{error}</Text>
      )}
    </Container>
  )
}
