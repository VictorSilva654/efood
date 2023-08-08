import star from '../../assets/images/estrela.png'
import {
  RestaurantDiv,
  UpText,
  Text,
  Title,
  Avaliation,
  Button
} from './styles'

export type Props = {
  image: string
  name: string
  avaliation: string
  description: string
}

const Restaurant = ({ image, name, avaliation, description }: Props) => (
  <RestaurantDiv>
    <img src={image} alt="Imagem do restaurante" />
    <div style={{ margin: '8px' }}>
      <Title>
        <UpText>{name}</UpText>
        <Avaliation>
          <UpText>{avaliation}</UpText>
          <img style={{ margin: '0 8px' }} src={star} alt="Estrela" />
        </Avaliation>
      </Title>
      <Text>{description}</Text>
      <Button>Saiba mais</Button>
    </div>
  </RestaurantDiv>
)

export default Restaurant