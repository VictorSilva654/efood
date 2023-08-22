import { ProductDiv, Title, Description, Button } from './styles'

export type Props = {
  image: string
  title: string
  description: string
  onClick: () => void
}

const Product = ({ image, title, description, onClick }: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 132) {
      return description.slice(0, 129) + '...'
    }
    return description
  }
  return (
    <ProductDiv>
      <img src={image} alt="" style={{ width: '304px', height: '167px' }} />
      <div className="product-container">
        <Title>{title}</Title>
        <Description>{getDescription(description)}</Description>
        <Button onClick={onClick}>Adicionar ao carrinho</Button>
      </div>
    </ProductDiv>
  )
}

export default Product
