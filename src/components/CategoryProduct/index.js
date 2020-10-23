import React, { useState, useEffect } from 'react'
import { FaTag } from 'react-icons/fa'

import api from '~/services/api'

import {
  Container,
  Text,
  AddedCartCategory,
} from './styles'

export default function CategoryProduct({ categoryID }) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    api.get(`category/${categoryID}`).then(response => {
      setCategories(response.data)
    })
  }, [categoryID])

  return (
    <Container>
      <AddedCartCategory>
        <FaTag
          size="15"
          color={`var(--secondary)`}
          className="icon"
        />

        {categories.length >= 1 ? (
          categories.map(category => (
            <Text
              key={category.id}
              margin="0 0 0 10px"
              size="13px"
            >
              {category.category}
            </Text>
          ))
        ) : (
          <Text>Nenhum categoria.</Text>
        )}
      </AddedCartCategory>
    </Container>
  )
}
