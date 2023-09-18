import { BackgroundDiv, PresentationDiv, SoftTitle, Title } from './styles'
import { toCapitalize } from '../../utils'

type Props = {
  restaurant: RestaurantType
}

const Presentation = ({ restaurant }: Props) => {
  return (
    <BackgroundDiv style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <PresentationDiv>
        <div className="container">
          <SoftTitle>{toCapitalize(restaurant.tipo)}</SoftTitle>
          <Title>{restaurant.titulo}</Title>
        </div>
      </PresentationDiv>
    </BackgroundDiv>
  )
}

export default Presentation
