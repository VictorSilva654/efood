import { useState } from 'react'
import { Cardapio } from '../Restaurant'
import Product from '../Product'
import { List, ListItem, Modal, ModalContainer, Button } from './styles'
import fechar from '../../assets/images/fechar.png'

export type Props = {
  cardapio: Cardapio[]
}

interface Modal extends Cardapio {
  isVisible: boolean
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const ProductsList = ({ cardapio }: Props) => {
  if (!cardapio) <h3>Carregando...</h3>
  const [modal, setModal] = useState<Modal>({
    isVisible: false,
    foto: '',
    preco: 0,
    id: 0,
    nome: '',
    descricao: '',
    porcao: 0
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      foto: '',
      preco: 0,
      id: 0,
      nome: '',
      descricao: '',
      porcao: 0
    })
  }

  return (
    <div className="container">
      <List>
        {cardapio.map((prato) => (
          <ListItem key={prato.id}>
            <Product
              image={prato.foto}
              title={prato.nome}
              description={prato.descricao}
              onClick={() =>
                setModal({
                  isVisible: true,
                  foto: prato.foto,
                  preco: prato.preco,
                  id: prato.id,
                  nome: prato.nome,
                  descricao: prato.descricao,
                  porcao: prato.porcao
                })
              }
            />
          </ListItem>
        ))}
      </List>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContainer>
          <div className="inner-container">
            <img
              src={modal.foto}
              style={{ width: '280px', height: '280px' }}
              alt="Foto do prato na Modal"
            />
            <div className="content-container">
              <h4>{modal.nome}</h4>
              <p>{modal.descricao}</p>
              <p>Serve: {modal.porcao}</p>
              <Button>{`Adicionar ao carrinho - ${formatPrice(
                modal.preco
              )}`}</Button>
            </div>
          </div>
          <img
            className="close"
            src={fechar}
            alt="Botão para fechar"
            onClick={() => closeModal()}
          />
        </ModalContainer>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </div>
  )
}

export default ProductsList
