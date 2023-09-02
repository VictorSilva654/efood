import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Index'
import Presentation from '../../components/Presentation'
import ProductList from '../../components/ProductsList'
import { useGetRestaurantsByIdQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetRestaurantsByIdQuery(id!)

  if (!restaurant) return <h3>Carregando...</h3>

  return (
    <>
      <Header />
      <Presentation restaurant={restaurant} />
      <ProductList cardapio={restaurant.cardapio} />
    </>
  )
}
export default Perfil
