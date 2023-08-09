import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { HeaderDiv, Logo, Title } from './styles'

const Header = () => (
  <HeaderDiv>
    <div className="container">
      <Title>Restaurantes</Title>
      <Link to="/">
        <Logo src={logo} alt="Efood" />
      </Link>
      <Title>0 produto(s) no carrinho</Title>
    </div>
  </HeaderDiv>
)

export default Header
