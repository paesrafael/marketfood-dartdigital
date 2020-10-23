import React, { useState } from 'react'
import { FaAlignLeft, FaOpencart } from 'react-icons/fa'
import Modal from 'react-modal'

import { useSearchProduct } from '~/contexts'

import {
  Container,
  Form,
  Input,
  Button,
  Text,
} from './styles'

export default function AddProduct() {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [productName, setProductName] = useState('')
  const [messageSuccess, setMessageSuccess] = useState('')
  const [error, setError] = useState('')

  const {
    cart,
    setCart,
    products,
  } = useSearchProduct()

  function handleOpenModal(type) {
    setIsOpen(type)
  }

  async function handleSubmitForm(event) {
    event.preventDefault()

    setError('')
    setMessageSuccess('')

    if (!productName) {
      setError('O campo não pode ser vazio.')

      setTimeout(() => {
        setError('')
      }, 2500)
    } else {
      const searchProduct = await products.filter(productItem => productItem.description === productName).map(product => (
        setCart([...cart, product])
      ))

      if (searchProduct.length > 0) {
        setMessageSuccess('Produto adicionado na sua lista de compras.')
        setProductName('')

        setTimeout(() => {
          setMessageSuccess('')
        }, 2700)
      } else {
        setError('Esse produto não foi encontrado.')
      }
    }
  }

  function handleProductNameChange(value) {
    setProductName(value)
  }

  const ModalStyles = {
    content: {
      top: '30%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '50%',
      overflow: 'hidden',
      transform: 'translate(-50%, -50%)',
    }
  }

  return (
    <Container>
      <FaAlignLeft
        size="25"
        color={`var(--red)`}
        className="icon"
        onClick={() => handleOpenModal(true)}
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => handleOpenModal(false)}
        ariaHideApp={false}
        style={ModalStyles}
        contentLabel="Cadastrar novo item"
      >
        <Form onSubmit={handleSubmitForm}>
          <Input
            type="text"
            value={productName}
            placeholder="Digite seu produto"
            onChange={(productNameItem) => handleProductNameChange(productNameItem.target.value)}
          />

          <Button type="submit">
            <Text>
              <FaOpencart
                size="25"
                color={`var(--white)`}
                className="icon"
              />
              Cadastrar
            </Text>
          </Button>
        </Form>

        {!!messageSuccess && (
          <Text
            margin="15px 0 0 0"
            color={`var(--primary)`}
            fontSize="15px"
          >
            {messageSuccess}
          </Text>
        )}

        {!!error && (
          <Text
            margin="15px 0 0 0"
            color={`var(--red)`}
            fontSize="15px"
          >
            {error}
          </Text>
        )}
      </Modal>
    </Container>
  )
}
