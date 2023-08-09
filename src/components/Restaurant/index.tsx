import star from '../../assets/images/estrela.png'
import * as Styles from './styles'

export type Props = {
  image: string
  name: string
  avaliation: string
  description: string
  tags: string[]
}

const Restaurant = ({ image, name, avaliation, description, tags }: Props) => (
  <Styles.RestaurantDiv>
    <Styles.TagContainer>
      {tags.map((tag) => (
        <Styles.Tag key={tag}>{tag}</Styles.Tag>
      ))}
    </Styles.TagContainer>
    <img src={image} alt="Imagem do restaurante" />
    <div style={{ margin: '8px' }}>
      <Styles.Title>
        <Styles.UpText>{name}</Styles.UpText>
        <Styles.Avaliation>
          <Styles.UpText>{avaliation}</Styles.UpText>
          <img style={{ margin: '0 8px' }} src={star} alt="Estrela" />
        </Styles.Avaliation>
      </Styles.Title>
      <Styles.Text>{description}</Styles.Text>
      <Styles.Button>Saiba mais</Styles.Button>
    </div>
  </Styles.RestaurantDiv>
)

export default Restaurant
