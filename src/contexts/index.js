import React, { createContext, useContext, useState, useEffect } from 'react'

import api from '~/services/api'

const SearchContext = createContext()

const SearchProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])
  const [searchProductName, setSearchProductName] = useState('')
  const [productQuantities, setProductQuantities] = useState([])
  const [addedCartProductQuantities, setAddedCartProductQuantities] = useState([])

  useEffect(() => {
    api.get('food').then(response => {
      setProducts(response.data)
    })
  }, [])

  const searchProduct = (description) => {
    return (
      products &&
      products.filter((item) =>
        item.description.toLowerCase().includes(description.toLowerCase())
      )
    )
  }

  return (
    <SearchContext.Provider
      value={{
        cart,
        setCart,
        products,
        searchProduct,
        searchProductName,
        setSearchProductName,
        productQuantities,
        setProductQuantities,
        addedCartProductQuantities,
        setAddedCartProductQuantities,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

function useSearchProduct() {
  const context = useContext(SearchContext)

  if (!context) {
    throw new Error('Houve um erro, você precisa usar o SearchProvider')
  }

  return context
}

export { SearchProvider, useSearchProduct }
