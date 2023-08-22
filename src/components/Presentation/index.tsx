import { BackgroundDiv, PresentationDiv, SoftTitle, Title } from './styles'
import { RestaurantType } from '../Restaurant'

type Props = {
  restaurant: RestaurantType
}

const Presentation = ({ restaurant }: Props) => {
  return (
    <BackgroundDiv style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <PresentationDiv>
        <div className="container">
          <SoftTitle>{restaurant.tipo}</SoftTitle>
          <Title>{restaurant.titulo}</Title>
        </div>
      </PresentationDiv>
    </BackgroundDiv>
  )
}

export default Presentation
