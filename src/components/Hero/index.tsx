import logo from '../../assets/images/logo.png'
import { HeroDiv, Title, Logo } from './styles'

const Hero = () => (
  <HeroDiv>
    <div className="container">
      <Logo src={logo} alt="Efood" />
      <Title>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </Title>
    </div>
  </HeroDiv>
)

export default Hero
