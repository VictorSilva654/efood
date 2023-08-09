import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { HeroDiv, Title, Logo } from './styles'

const Hero = () => (
  <HeroDiv>
    <div className="container">
      <Link to="/">
        <Logo src={logo} alt="Efood" />
      </Link>
      <Title>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </Title>
    </div>
  </HeroDiv>
)

export default Hero
