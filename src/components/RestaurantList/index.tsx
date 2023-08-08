import Restaurant from '../Restaurant'
import sushi from '../../assets/images/sushi.png'
import massa from '../../assets/images/massa.png'
import { List, ListItem } from './styles'

const RestaurantList = () => {
  const descriptionSushi =
    'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'

  const descriptionPasta =
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  return (
    <div className="container">
      <List>
        <ListItem>
          <Restaurant
            image={sushi}
            avaliation="4.9"
            description={descriptionSushi}
            name="Hioki Sushi"
          />
        </ListItem>
        <ListItem>
          <Restaurant
            image={massa}
            avaliation="4.6"
            description={descriptionPasta}
            name="La Dolce Vita Trattoria"
          />
        </ListItem>
        <ListItem>
          <Restaurant
            image={massa}
            avaliation="4.6"
            description={descriptionPasta}
            name="La Dolce Vita Trattoria"
          />
        </ListItem>
        <ListItem>
          <Restaurant
            image={massa}
            avaliation="4.6"
            description={descriptionPasta}
            name="La Dolce Vita Trattoria"
          />
        </ListItem>
        <ListItem>
          <Restaurant
            image={massa}
            avaliation="4.6"
            description={descriptionPasta}
            name="La Dolce Vita Trattoria"
          />
        </ListItem>
        <ListItem>
          <Restaurant
            image={massa}
            avaliation="4.6"
            description={descriptionPasta}
            name="La Dolce Vita Trattoria"
          />
        </ListItem>
      </List>
    </div>
  )
}

export default RestaurantList
