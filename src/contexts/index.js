import React, {
  createContext, useContext,
  useState, useEffect
} from 'react'

import api from '~/services/api'

const SearchContext = createContext()

const SearchProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])
  const [searchProductName, setSearchProductName] = useState('')
  const [productQuantities, setProductQuantities] = useState([])
  const [addedCartProductQuantities, setAddedCartProductQuantities] = useState([])

  useEffect(() => {
    setLoading(true)

    async function getSupermarket() {
      await api.get('food').then(response => {
        setProducts(response.data)
      })

      setLoading(false)
    }

    getSupermarket()
  }, [])

  const searchProduct = (description) => {
    return (
      products && (
        products.filter((item) =>
          item.description.toLowerCase().includes(description.toLowerCase())
        )
      )
    )
  }

  return (
    <SearchContext.Provider
      value={{
        loading,
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
