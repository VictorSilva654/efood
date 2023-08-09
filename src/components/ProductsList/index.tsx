import Product from '../Product'
import pizza from '../../assets/images/pizza.png'
import { List, ListItem } from './styles'

const ProductsList = () => {
  const descriptionPizza =
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  return (
    <div className="container">
      <List>
        <ListItem>
          <Product
            image={pizza}
            title="Pizza Marguerita"
            description={descriptionPizza}
          />
        </ListItem>
        <ListItem>
          <Product
            image={pizza}
            title="Pizza Marguerita"
            description={descriptionPizza}
          />
        </ListItem>
        <ListItem>
          <Product
            image={pizza}
            title="Pizza Marguerita"
            description={descriptionPizza}
          />
        </ListItem>
        <ListItem>
          <Product
            image={pizza}
            title="Pizza Marguerita"
            description={descriptionPizza}
          />
        </ListItem>
        <ListItem>
          <Product
            image={pizza}
            title="Pizza Marguerita"
            description={descriptionPizza}
          />
        </ListItem>
        <ListItem>
          <Product
            image={pizza}
            title="Pizza Marguerita"
            description={descriptionPizza}
          />
        </ListItem>
      </List>
    </div>
  )
}

export default ProductsList
