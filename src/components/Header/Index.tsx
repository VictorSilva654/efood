import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { HeaderDiv, Logo, Title } from './styles'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderDiv>
      <div className="container">
        <Title>Restaurantes</Title>
        <Link to="/">
          <Logo src={logo} alt="Efood" />
        </Link>
        <Title onClick={openCart}>{items.length} produto(s) no carrinho</Title>
      </div>
    </HeaderDiv>
  )
}

export default Header
