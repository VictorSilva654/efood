import logo from '../../assets/images/logo.png'
import { HeaderDiv, Logo, Title } from './styles'

const Header = () => (
  <HeaderDiv>
    <div className="container">
      <Title>Restaurantes</Title>
      <Logo src={logo} alt="Efood" />
      <Title>0 produto(s) no carrinho</Title>
    </div>
  </HeaderDiv>
)

export default Header
