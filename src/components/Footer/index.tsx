import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'
import { FooterDiv, Medias, Logo } from './styles'

const Footer = () => (
  <FooterDiv>
    <div className="container">
      <Link to="/">
        <Logo src={logo} alt="Efood" />
      </Link>
      <Medias>
        <img src={instagram} alt="Instagram" />
        <img src={facebook} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
      </Medias>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </FooterDiv>
)

export default Footer
