import { useSelector, useDispatch } from 'react-redux'
import img from '../../assets/images/massa.png'
import { RootReducer } from '../../store'
import { remove, close } from '../../store/reducers/cart'
import {
  Sidebar,
  Overlay,
  CartContainer,
  CartItem,
  ButtonContinue
} from './styles'
import { formatPrice } from '../ProductsList'

const Cart = () => {
  const { visible, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={visible ? 'visible' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} className="image-food" />
              <div>
                <h2>{item.nome}</h2>
                <h3>{formatPrice(item.preco)}</h3>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                type="button"
                className="trash"
              />
            </CartItem>
          ))}
        </ul>
        <div className="total-price">
          <p>Valor total</p>
          <p>{formatPrice(getTotalPrice())}</p>
        </div>
        <ButtonContinue>Continuar com a entrega</ButtonContinue>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
