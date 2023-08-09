import { ProductDiv, Title, Description, Button } from './styles'

export type Props = {
  image: string
  title: string
  description: string
}

const Product = ({ image, title, description }: Props) => (
  <ProductDiv>
    <img src={image} alt="" style={{ width: '304px', height: '167px' }} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button>Adicionar ao carrinho</Button>
  </ProductDiv>
)

export default Product
