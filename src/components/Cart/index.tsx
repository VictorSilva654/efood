import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { remove } from '../../store/reducers/cart'
import { CartItem, ButtonContinue, CartContainer } from './styles'
import Sidebar from '../Sidebar'
import { formatPrice, getTotalPrice } from '../../utils'

const Cart = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <Sidebar id="cart">
      <CartContainer>
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
          <p>{formatPrice(getTotalPrice(items))}</p>
        </div>
        <ButtonContinue to="/#delivery">Continuar com a entrega</ButtonContinue>
      </CartContainer>
    </Sidebar>
  )
}

export default Cart
